---
title:  "DSLs"
date:   2021-01-20
resources:
  - id: kotlin-type-safe-builders
    label: Type-Safe Builders
    description: Kotlin Type-Safe Builders documentation
    url: https://kotlinlang.org/docs/reference/type-safe-builders.html
    type: Documentation
    icon: book-half
---

<div class="callout callout-migrated" markdown="1">
<i class="bi bi-clock-history"></i> Originally published on [Notion](https://www.notion.so/razza/Kotlin-Creating-DSLs-e17bcf7a69224477b0de4c3c6178b873).

This article is the one originally posted with a few markup changes and spelling fixes.
</div>

I reckon Kotlin is better than Java. It's more dense and less verbose than Java, letting me get on with my day. One of the features I like the most about Kotlin is the relatively easy way of getting things built (based on the typical Java builders) with DSLs.

DSL stands for Domain Specific Language and is a way to semi declaratively define items in a more concise way.

```kotlin
val sb = StringBuilder()
value.names.forEach {
  sb.append(it)
  sb.append(" ")
}
if (value.familyName != null)
  sb.append(value.familyName)
labelName.text = sb.toString().trim()
```

```kotlin
labelName.text = buildString {
  value.names.forEach {
    append(it)
    append(" ")
  }
  if (value.familyName != null)
    append(value.familyName)
}.trim()
```

The above example is pretty simple, but shows some of the basics. Notice how in the DSL body you wouldn't need to refer back to the StringBuilder object. In this case it's not too bad since I like to name my StringBuilder objects `sb` for brevity, but imagine it being something like `objectStringBuilder` or something like that.

You'll see how in the example I'm about to show, DSLs can really simplify a lot of complex operations.

# A bit more on StringBuilder

DSLs in Kotlin work off of builder objects, like StringBuilder. The `buildString` DSL from above works with StringBuilder class. One possible implementation of the `buildString` functions is something like so:

```kotlin
fun buildString(action: StringBuilder.() -> Unit): String {
    val sb = StringBuilder()
    sb.action()
    return sb.toString()
}
```

Let's break it down. The function takes in one argument, `action` which is an extension function for StringBuilder. This will make `this` be the StringBuilder object in the lambda function we pass to `buildString`. In the function body we'd use `this.append(...)` to add text to the string, which we can then shorten to `append(...)`.

After ~~all the magic happens~~ the lambda gets called to build the string, return it from the StringBuilder and call it a day.

# Let's put it in practice with Swing

Since Kotlin is most commonly used on the Java platform, Swing can be used from within. But since Swing is still only a Java library, there are no DSLs to take advantage of. Which left me to make my own 😁.

For this example, I'll be remaking the menu bar from a team project I've worked on during my sophomore year at uni, which has the following layout.

```
Menu Bar
├── Game
│   └── Quit (Alt+F4)
└── Help
    ├── About
    └── How to Play (F1)
```

And here's the original Java implementation (which `git blame` reveals me as the person who committed this.) You can see my best effort at keeping this mess clean.

<details class="collapsible">
<summary><i class="bi bi-code-slash"></i> Java implementation</summary>
<div class="collapsible-body collapsible-body-flush" markdown="1">

```java
// menuBar
menuBar = new JMenuBar();
{
    // menuBar_game
    menuBar_game = new JMenu("Game");
    menuBar_game.setMnemonic('G');
    {
        // menuBar_game_quit
        menuBar_game_quit = new JMenuItem("Quit");
        menuBar_game_quit.setMnemonic('Q');
        menuBar_game_quit
                .setAccelerator(
                        KeyStroke.getKeyStroke(KeyEvent.VK_F4, InputEvent.ALT_MASK));
        menuBar_game_quit.addActionListener(this::menuBar_game_quit_onClick);
        menuBar_game.add(menuBar_game_quit);
    }
    menuBar.add(menuBar_game);

    // menuBar_help
    menuBar_help = new JMenu("Help");
    menuBar_help.setMnemonic('H');
    {
        // menuBar_help_howToPlay
        menuBar_help_howToPlay = new JMenuItem("How to Play");
        menuBar_help_howToPlay.setMnemonic('H');
        menuBar_help_howToPlay.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_F1, 0));
        menuBar_help_howToPlay.addActionListener(e -> showHelpView());
        menuBar_help.add(menuBar_help_howToPlay);

        // menuBar_help_about
        menuBar_help_about = new JMenuItem("About");
        menuBar_help_about.setMnemonic('A');
        menuBar_help_about.addActionListener(e ->
                JOptionPane.showMessageDialog(
                        window,
                        "Cluedo 2.0 by Team LANR\n" +
                                "Shipping it to launch.\n" +
                                "\n" +
                                "Made by: Lawrence N, Andrew C, Nicholas WBA, Rareș N",
                        "About Cluedo 2.0",
                        JOptionPane.INFORMATION_MESSAGE));
        menuBar_help.add(menuBar_help_about);
    }
    menuBar.add(menuBar_help);
}
window.setJMenuBar(menuBar);
```

</div>
</details>

Using a simple DSL like the example above, we can make a DSL for creating the menu bar and the items going on it. But unlike the `buildString` one, we just return the new menu bar.

<details class="collapsible">
<summary><i class="bi bi-code-slash"></i> JMenuBar, JMenu and JMenuItem DSLs (with an action one for good measure)</summary>
<div class="collapsible-body collapsible-body-flush" markdown="1">

```kotlin
/**
 * Create a menu bar.
 */
fun buildMenuBar(init: JMenuBar.() -> Unit): JMenuBar {
    val menuBar = JMenuBar()
    menuBar.init()
    return menuBar
}

/**
 * Create a menu.
 */
fun buildMenu(init: JMenu.() -> Unit): JMenu {
    val menu = JMenu()
    menu.init()
    return menu
}

/**
 * Create a menu item.
 */
fun buildMenuItem(init: JMenuItem.() -> Unit): JMenuItem {
    val menuItem = JMenuItem()
    menuItem.init()
    return menuItem
}

/**
 * Create an action.
 */
fun action(action: () -> Unit) = object : AbstractAction() {
    override fun actionPerformed(e: ActionEvent?) {
        action()
    }
}
```

</div>
</details>

And with these DSLs, you can make the menu from above like this:

```kotlin
// menuBar
window.jMenuBar = buildMenuBar {
    // menuBar_game
    add(buildMenu {
        text = "Game"
        mnemonic = 'G'.toInt()

        // menuBar_game_quit
        add(buildMenuItem {
            text = "Quit"
            mnemonic = 'Q'.toInt()
            accelerator = KeyStroke.getKeyStroke(KeyEvent.VK_F4, InputEvent.ALT_MASK)
            addActionListener(action { /* this::menuBar_game_quit_onClick */ })
        })
    })

    // menuBar_help
    add(buildMenu {
        text = "Help"
        mnemonic = 'H'.toInt()

        // menuBar_help_howToPlay
        add(buildMenuItem {
            text = "How to Play"
            mnemonic = 'H'.toInt()
            accelerator = KeyStroke.getKeyStroke(KeyEvent.VK_F1, 0)
            addActionListener(action { /* showHelpView() */ })
        })

        // menuBar_help_about
        add(buildMenuItem {
            text = "About"
            mnemonic = 'A'.toInt()
            addActionListener(action {
                JOptionPane.showMessageDialog(
                    window,
                    "Cluedo 2.0 by Team LANR\n" +
                            "Shipping it to launch.\n" +
                            "\n" +
                            "Made by Lawrence N, Andrew C, Nicholas WBA, Raresh N",
                    "About Cluedo 2.0",
                    JOptionPane.INFORMATION_MESSAGE
                )
            })
        })
    })
}
```

I think the Kotlin code with the DSL functions is much more concise and easier to read than the Java one, making it easier to understand and change later on.

<!-- TODO: add side-by-side Java/Kotlin comparison once component is built (task #1, #5) -->

# Read More

This entry is just the start. There are way more complex DSLs you can make, which you can read about in the {% include resource-chip.html id="kotlin-type-safe-builders" %} docs.
