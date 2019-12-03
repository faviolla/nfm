<template>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

li {
  padding: 5px 15px 5px 0;
}

li a {
  text-decoration: none;
  color: black;
}

li a:hover {
  color: #404040;
}
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "Service Requests",
        to: "/ServiceRequests"
      },
      {
        name: "New Request",
        to: "/NewRequest"
      },
      {
        name: "New Request Equipment",
        to: "/NewRequestEquipment"
      },
      {
        name: "Modal",
        to: "/modal"
      },
      {
        name: "404",
        to: "/random-bad-url"
      }
    ]
  })
};
</script>
