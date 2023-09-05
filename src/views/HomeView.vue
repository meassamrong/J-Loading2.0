<template>
  <div class="control-sencs">
    <div class="sencs-backgroups"></div>
    <div class="control-logo">
      <img src="../assets/image/Enterprise-AI-landscape-2020-updated.jpg" alt="" />
    </div>
    <div class="sencs-titls-home">
      <span>G&A RACING</span><br />
      RolePlay Server
    </div>
    <div class="control-buttons">
      <button>Racing to fun</button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.control-sencs {
  z-index: 999;
  height: 70vh;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid 2px #fff;
  z-index: 1;
}
.sencs-backgroups {
  height: 100%;
  width: 100%;
  background-image: url('../assets/image/image3sea.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(3px);
  z-index: -999;
  position: absolute;
}
.sencs-titls-home {
  text-align: center;
  font-size: 2em;
  color: orange;
  font-family: Plaguard-ZVnjx;
  text-shadow: 11px 9px 2px #9cb52bfb;
  line-height: 70px;
}
.sencs-titls-home span {
  font-size: 4em;
}
.control-logo {
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 50px 0px;
}
.control-logo img {
  height: 250px;
  border-radius: 50%;
  border: solid 4px orange;
}
.control-buttons {
  text-align: center;
  z-index: 999;
  padding: 20px 0px;
}
.control-buttons button {
  border: none;
  font-size: 45px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #2f9b40;
  cursor: pointer;
  font-family: pricedow;
  transition: all 0.3s;
}
.control-buttons button:hover {
  transform: scale(1.1);
}
</style>
