import{c as m,a as u,h as f}from"./vendor-vue.2f656d6f.js";import{i as l,d as b,H as i,e as y}from"./vendor-svelte.30fdc271.js";var h=n=>document.getElementById(n)||console.error(`Missing #${n}, could not mount island.`);function w(n,a,r,e,t){const o=h(r);o&&(n(a,r,o,e,t),o.setAttribute("hydrated",""))}var j=u;function I(n,a,r,e,t){const o=t&&Object.fromEntries(Object.entries(t).map(([p,d])=>[p,()=>m(d)]));j({render:()=>f(n,e,o)}).mount(r,Boolean(t))}function A(n,a,r,e,t={}){const o=t&&Object.fromEntries(Object.entries(t).map(([c,s])=>[c,[()=>O(s)]]));new n({target:r,props:{...e,$$slots:o,$$scope:{ctx:{}}},hydrate:!0})}function O(n){let a=new i;const r=()=>{a=new i,Object.assign(a,{a:y()})};return r(),{c:r,l(){},m(e,t){a.m(n,e,t),l(e,a.a,t)},p(){},d(e){e&&b(a.a),e&&a.d()}}}export{A as a,I as c,w as h};