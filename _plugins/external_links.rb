require "nokogiri"

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html"

  parsed = Nokogiri::HTML(doc.output)
  parsed.css("article a[href]").each do |a|
    if a["href"].match?(/\Ahttps?:\/\//)
      a["target"] = "_blank"
      a["rel"] = "noopener noreferrer"
      a["class"] = [a["class"], "link-target-blank"].compact.join(" ")
    else
      a["class"] = [a["class"], "link-target-self"].compact.join(" ")
    end
  end
  doc.output = parsed.to_html
end
