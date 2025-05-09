const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  return `Sono le ${hours}:${minutes}:${seconds}`;
};

setInterval(() => {
  console.log(getCurrentTime());
}, 1000);
