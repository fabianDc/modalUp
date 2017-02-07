# modalUp
Plugin to easily create a Bootstrap Modal, adding content and function 

To Get Started
--------------
1. Plugin dependencies

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

2. Add basic settings: tittle, body, callback(action of the functional button), closeButtonName, functionButtonName  

       var conf={body:'<p>How do I look?!</p>',tittle:'My new modalUp',closeButtonName:"Cerrar",functionButtonName:"Guardar"};

3. Use it

        <button onclick=$(this).modal(conf)>modal</button>

Attributes
------------

  - tittle
  - body 
  -callback
  -
 

Examples
--------
1. html page. 

            <div class="container">
                <h2>Basic ModalUp Example</h2>
                <!-- Trigger the modal with a button -->
                <button type="button" class="btn btn-info btn-lg" id="modaltest" onclick="$(this).modalup(conf)">Open Modal</button>  
            </div>
2. script
        <script>
          var conf={body:'<p>How do I look?!</p>',tittle:'My new modalUp',closeButtonName:"Cerrar",functionButtonName:"Guardar"};
        </script>   
            
