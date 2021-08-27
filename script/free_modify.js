function save() {
    if (!confirm('수정하시겠습니까?')) {
      return;
    }
    var contents;
      try {
        contents = JSON.parse(localStorage.getItem("contents"));
      } catch (e) {
        contents = null;
      }

    if (!contents) {
      contents = [];
    }
    var title = document.getElementById('title').value;
    var writer = document.getElementById('writer').value;
    var content = document.getElementById('content').value;
    contents[getParameterByName('no')-1]={no:contents.length
      , title:title
      , writer:writer
      , content:content
      , write_date:new Date()};
    localStorage.setItem("contents", JSON.stringify(contents));
    alert('수정되었습니다.');
    location.href = 'list.html';
  }

  var contents = JSON.parse(localStorage.getItem("contents"));
  getContents();
  function getContents() {

    if (!contents) {
      contents = [];
    }
    
    var content = contents[getParameterByName('no')-1];
    document.getElementById('title').value = content.title;
    document.getElementById('writer').value = content.writer;
    document.getElementById('content').value = content.content;
  }

  function removeContent() {
    if (confirm('삭제하시겠습니까?')){
        location.href = 'list.html';
      } else {
        return;
      }
    console.log(contents);
    contents.splice(getParameterByName('no')-1, getParameterByName('no'));
    localStorage.setItem("contents", JSON.stringify(contents));
  }
    function modify() {
      if (confirm('수정하시겠습니까?')){
        location.href = 'form.html?no='+getParameterByName('no');
        
      } else {
        return;
      }
    }
    function getParameterByName(name) { 
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }