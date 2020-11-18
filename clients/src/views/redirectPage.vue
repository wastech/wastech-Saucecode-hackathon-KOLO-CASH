<template>
  <main>
    <div>
      <h4>A confirmation link was sent to your email address</h4>
      <div class="button">
        <button type="button" class="btn btn-lg">go to mail app</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn {
  background-color: #640064;
  color: white;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

main {
  height: 700px;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h4 {
  color: black;

  font-weight: 900;
}
.button {
  margin: 0 auto;
}

main div {
  color: white;
  width: 50%;
  text-align: center;
  padding: 20px;
}
</style>