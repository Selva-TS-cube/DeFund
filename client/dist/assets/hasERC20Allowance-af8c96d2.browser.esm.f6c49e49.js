import{C as c,ah as d}from"./index.d6f47f7e.js";async function w(a,e,n){const r=a.getProvider(),s=new c(r,e,d,{},a.storage),t=await a.getSignerAddress(),o=a.readContract.address;return(await s.readContract.allowance(t,o)).gte(n)}export{w as h};