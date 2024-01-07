function samplePromise(){
    return Promise.resolve("Eko")
}

// error karena kalau filenya ekstensionnya .js, maka untuk menggunakan async await, maka harus dibuat di dalam async function
// atau bisa dibuat dengan ekstension .mjs, jadi dengan .mjs, dia bisa menggunakan await tanpa harus di dalam async function
// const name = await samplePromise()
// console.info(name)

//contoh async function
async function run(){
    const name = await samplePromise();
    console.info(name)
}

run()