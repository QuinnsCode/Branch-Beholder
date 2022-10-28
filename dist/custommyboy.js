<script type="text/javascript">
    console.log("Made to the script");
    engraver.init("preview-canvas");

    console.log("engraver initialized")
    engraver.setProduct('f9e7abfe-e4c3-4541-9b3f-563289994ba2').then(function () {
      // engraver.setImage(1, "http://i.imgur.com/9S2IPKz.jpg").then(function(){
      // });
    });
    console.log("Made to set product")
    function showUploadedImage(placeholderId, fileInputId) {
      var file = $('#' + fileInputId)[0].files[0];
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        engraver.setImage(placeholderId, reader.result);
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    function previewVector(placeholderId, fileInputId) {
      var file = $('#' + fileInputId)[0].files[0];
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        engraver.setVector(placeholderId, reader.result);
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    function processText(textId, value) {
      engraver.setText(textId, value);
    }
    function changeWood(dynamicId, value) {
      engraver.setPresetImage(dynamicId, parseInt(value));
      engraver.setFontColor(1, parseInt(value));
    }
    function changeFont(textId, value) {
      engraver.setFont(textId, parseInt(value));
    }
  </script>
