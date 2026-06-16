# Builds a nested tree of the `kb` collection from its folder structure, so the
# index and sitemap can render arbitrarily deep nesting (Liquid alone can only
# group one level deep). Exposed as `site.data.kb_tree`.
#
# A node is { "name" => "linux", "pages" => [doc, ...], "folders" => [node, ...] }.
# The root node has an empty name; its pages are files dropped straight into `_kb/`.
module Jekyll
  class KbTreeGenerator < Generator
    safe true

    def generate(site)
      collection = site.collections["kb"]
      return unless collection

      root = new_node("")

      collection.docs.each do |doc|
        segments = doc.relative_path.sub(%r{\A_kb/}, "").split("/")
        segments.pop # drop the filename, leaving only folders

        node = segments.reduce(root) do |current, name|
          current["folders"][name] ||= new_node(name)
        end
        node["pages"] << doc
      end

      site.data["kb_tree"] = sort_folders(root)
    end

    private

    def new_node(name)
      { "name" => name, "pages" => [], "folders" => {} }
    end

    # Replace each `folders` hash with a name-sorted array, recursively.
    def sort_folders(node)
      node.merge(
        "folders" => node["folders"].values.sort_by { |child| child["name"] }.map { |child| sort_folders(child) },
      )
    end
  end
end
