var myDropzone = new Dropzone("#dropZoo", { url: "/upload"});

myDropzone.on("sending", function(file, xhr, formData) {
  formData.append("fullPath", file.fullPath);
  console.log(formData);
  console.log(file.fullPath);
});

// dropZoo.addEventListener("drop", function(event) {
//   event.preventDefault();
//   var data = event.dataTransfer.getData("text");
//   var items = event.dataTransfer.items;
//   for (var i=0; i<items.length; i++) {
//     // webkitGetAsEntry is where the magic happens
//     var item = items[i].webkitGetAsEntry();
//     if (item) {
//       traverseFileTree(item);
//     }
//   }
// }, false);

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     // ev.target.appendChild(document.getElementById(data));
// }

// var dropZoo = document.getElementById('dropZoo');

// function traverseFileTree(item, path) {
//   path = path || "";
//   if (item.isFile) {
//     // Get file
//     console.log(item);
//     item.file(function(file) {
//       // console.log("File:", path + file.name, file);
//     });
//   } else if (item.isDirectory) {
//     // Get folder contents
//     // SE FOR O DIRETORIO POSSO CRIAR UM READER NELE
//     var dirReader = item.createReader();
//     // A PARTIR DO READER CRIADO LER AS ENTRADAS DESSE DIRETORIO
//     dirReader.readEntries(function(entries) {
//        // PARA CADA ENTRADITA TU TERAS UM LUPE
//       for (var i=0; i<entries.length; i++) {
//       	// A ENTRADA EH ESSA AQUI
//       	// DEPOIS QUE VOCE LE O DIRETORIO TODO VOCE PEGA CADA ITEM E USA A FUNCAO DE TRAVERSE PRA ITEM NO CASO AQUI
//         traverseFileTree(entries[i], path + item.name + "/");
//       }
//     });
//   }
// }