
let add = document.getElementById('agregar')
let save = document.getElementById('guardar')
let list = document.getElementById('lista')

let data = []
let ordenTransporte = 0


add.addEventListener('click',agregarFuncion);
save.addEventListener('click',guardarFuncion);

function agregarFuncion(e){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let destino = document.getElementById("listadoComunas").value;
    let cantidad = parseFloat(document.getElementById("canti").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let total = cantidad*peso
    data.push(
        {
            "id": ordenTransporte,
            "nombre": nombre,
            "apellido": apellido,
            "destinao" : destino,
            "cantidad" : cantidad,
            "peso": peso,
            "total": total
        }
    
    );
    let id_row = 'row'+ordenTransporte
    let fila = '<tr id='+id_row+'> <td>'+ordenTransporte+'</td> <td>'+nombre+'</td> <td>'+apellido+'</td> <td>'+destino+'</td> <td>'+cantidad+'</td> <td>'+peso+'</td> <td> <a href="" class="btn btn-danger" onclick="eliminar('+ordenTransporte+')"> Eliminar </a></td> </tr>'
    $("#lista").append(fila);
//    $("#nombre").val('');
//    $("#apellido").val('');
//    $("#peso").val('');
    ordenTransporte++
    sumar();
    e.preventDefault();
}

function sumar(){
    let tot=0;
    for(x of data){
        tot=tot+x.total;
    }
    document.getElementById('total').innerHTML="Peso Total   "+tot;
}

function eliminar(row){
    $("#row"+row).remove();
    let i=0;
    let pos=0;
    for (x of data){
        if (x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1)


}

function guardarFuncion(){

}