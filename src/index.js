async function main() {
  const url =
    "https://viv-demo.storage.googleapis.com/Vanderbilt-Spraggins-Kidney-MxIF.ome.tif";
  for (j = 0; j < 10; j++){
    const requests = [];
    for (i = 0; i < 15; i++) {
      requests.push(
        fetch(url, {
          headers: {
            Range: `bytes=${i * j * 65535}-${(i + 1) * j * 65535}`,
          },
        })
      );
    }
  }
  await Promise.all(requests)
  await setTimeout(() => { }, 1000)
}

main();
