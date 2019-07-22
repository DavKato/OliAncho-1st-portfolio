<script>
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
import "highlight.js/styles/foundation.css";

export default {
  props: ["renderFunc", "staticRenderFuncs"],
  mounted() {
    this.initHighlightJs;
  },
  components: {
    BagusImg: () => import("~/components/Blog/BagusImg"),
    BagusLink: () => import("~/components/Blog/BagusLink")
  },
  data() {
    return {
      templateRender: null
    };
  },
  computed: {
    initHighlightJs() {
      let targets = document.querySelectorAll("code");
      targets.forEach(target => {
        hljs.highlightBlock(target);
      });
    }
  },
  render(createElement) {
    return this.templateRender
      ? this.templateRender()
      : createElement("div", "Rendering");
  },
  created() {
    this.templateRender = new Function(this.renderFunc)();
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
  }
};
</script>
