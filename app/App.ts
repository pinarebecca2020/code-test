export default function printMe(...paramethers: any) {
  paramethers.forEach((parameter: any) => {
    if (Array.isArray(parameter)) {
      for (const element of parameter) {
        console.log(element)
      }
    } else {
      console.log(parameter)
    }
  })
}
