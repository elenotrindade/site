import { ref, computed, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import Demos from "./Demos-BBcxTR12.js";
import "./ERP-y2baRTYa.js";
import "./SidebarMenu-C2sNJmW4.js";
import "./ProductManager-Br7coRcY.js";
import "./ProductForm-DEdI99my.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./EmployeeManager-ClJDNBuD.js";
import "./EmployeeForm-X6IlNVGy.js";
import "./OrderList-CGDTB2zY.js";
import "./Website-DQR-tlBY.js";
import "./Header-DbF0Qh2K.js";
import "./Banner-B46zS20a.js";
import "./ProductList-CRZoXxjl.js";
import "./silver-bracelet-DnlgWG6B.js";
import "./Newsletter-Bh0omwBD.js";
import "./Reviews-D5X_jhNA.js";
import "./ContactFooter-CNJrRs3A.js";
import "./Statistics-Cuu7S8wC.js";
import "chart.js/auto";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const texts = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "你好", "Olá"];
    const currentText = ref("");
    ref(0);
    const count = ref(0);
    const isDeleting = ref(false);
    const displayText = computed(() => currentText.value);
    function type() {
      let fullText = texts[count.value % texts.length];
      if (isDeleting.value) {
        currentText.value = fullText.substring(0, currentText.value.length - 1);
      } else {
        currentText.value = fullText.substring(0, currentText.value.length + 1);
      }
      if (!isDeleting.value && currentText.value === fullText) {
        setTimeout(() => isDeleting.value = true, 200);
      } else if (isDeleting.value && currentText.value === "") {
        isDeleting.value = false;
        count.value++;
      }
      setTimeout(type, 150);
    }
    onMounted(() => {
      type();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "eleno.dev" }, null, _parent));
      _push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><div id="app" class="text-black/50 dark:text-white/50"><div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><div class="background-animation"></div><div class="falling-diamonds"></div><main class="mt-6 text-center relative z-10"><div class="hello-languages" id="hello-languages"><span>${ssrInterpolate(displayText.value)}</span><span class="cursor"></span></div><div class="info-box"><h2>Eleno Trindade</h2><p>Full Stack Developer</p><p class="contact-text">Entre em contato</p><div class="social-icons"><a href="https://github.com/elenotrindade" target="_blank"><i class="fab fa-github"></i></a><a href="https://linkedin.com/in/elenotrindade" target="_blank"><i class="fab fa-linkedin"></i></a></div></div><div class="demos-box">`);
      _push(ssrRenderComponent(Demos, null, null, _parent));
      _push(`</div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70 relative z-10"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
