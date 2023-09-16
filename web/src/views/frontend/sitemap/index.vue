<template>
  <div>
    <p v-for="page in sitemap" :key="page.title">
      <a :title="page.title" :href="page.url">{{ page.title }}</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sitemap: [
        { title: "Home", url: "https://www.repicea.com/main" },
        { title: "About Repicea", url: "https://www.repicea.com/aboutus" },
        { title: "Products", url: "https://www.repicea.com/products" },
        { title: "FAQ", url: "https://www.repicea.com/faq" },
        { title: "Company News", url: "https://www.repicea.com/news" },
        { title: "Contact Us", url: "https://www.repicea.com/contact" },
        { title: "Sitemap", url: "https://www.repicea.com/sitemap" }
      ]
    };
  }
};
</script>
