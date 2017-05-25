import * as MarkdownIt from 'markdown-it';
import * as emoji from 'markdown-it-emoji';
import * as twemoji from 'twemoji';
import * as deflist from 'markdown-it-deflist';
import * as hljs from 'highlight.js';
window['hljs'] = hljs;

export class Markdown {
  constructor() {
    let md = new MarkdownIt({
      html:         true,        // Enable HTML tags in source
      xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                  // This is only for full CommonMark compatibility.
      breaks:       true,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                  // useful for external highlighters.
      linkify:      true,        // Autoconvert URL-like text to links

      // Enable some language-neutral replacement + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      highlight: function (str, lang) { 
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
        return ''; 
      }
    });
    md.use(deflist)
      .use(emoji);
    md.renderer.rules['emoji'] = function(token, idx) {
      return twemoji.parse(token[idx].content);
    };
    return md;
  }
}
