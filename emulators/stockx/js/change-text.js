// In-place edit prompts for all .editable elements
document.addEventListener('click', (e)=>{
  const el = e.target.closest('.editable');
  if(!el) return;
  const text = el.textContent.trim();
  const promptText = el.getAttribute('data-prompt') || 'Enter new text:';
  const value = window.prompt(promptText, text);
  if(value !== null && value !== '') el.textContent = value;
});

// Click image to replace with a local file (preview only)
(function(){
  const img = document.getElementById('product-image');
  if(!img) return;
  img.addEventListener('click', ()=>{
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e=>{
      const file = e.target.files[0];
      if(file){
        const url = URL.createObjectURL(file);
        img.src = url;
      }
    };
    input.click();
  });
})();