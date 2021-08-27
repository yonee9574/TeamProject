function valid(){
    var titleEl=document.getElementById('title');
    var writerEl=document.getElementById('writer');
    var categoryEl=document.getElementById('category');
    var contentsEl=document.getElementById('contents');
    if(!titleEl.value){
        alert("제목을 입력하세요.")
      return false;
     }
     else if(!writerEl.value){
        alert("작성자를 입력하세요.")
      return false;
     }
     else if(!categoryEl.value){
        alert("카테고리를 입력하세요.")
      return false;
     }
     else if(!contentsEl.value){
        alert("내용을 입력하세요.")
      return false;
     }
    return true;
  }
  
  
    function save() {
      if (!confirm('저장하시겠습니까?')) {
        return;
      }
      if(!valid()){
        return;
  
      }
      var contents;
        try {
          contents = JSON.parse(localStorage.getItem("contents3"));
        } catch (e) {
          contents = null;
        }
  
      if (!contents) {
        contents = [];
      }
  
      var title = document.getElementById('title').value;
      var writer = document.getElementById('writer').value;
      var category = document.getElementById('category').value;
      var content = document.getElementById('contents').value;
      contents.push({no:contents.length+1
        , title:title
        , writer:writer
        , category:category
        , contents:content
        , write_date:new Date()});
      localStorage.setItem("contents3", JSON.stringify(contents));
  
      alert('저장되었습니다.');
      location.href = 'list.html';
    }