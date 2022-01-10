
$('#btnRegistrar').on('click', async function() {
    
        let data = await fetch('data/animales.json')
        const data2 = await data.json()
        const animales = data2.animales
        console.log(animales)

        const nombreAnimal = $('#animal').val()
        const edad = $('#edad').val()
        const comentarios = $('#comentarios').val()


        const imgAnimal = animales.find( an => an.name == nombreAnimal).imagen
        const idNuevoAnimal = animales.find( an => an.name == nombreAnimal).name
        console.log(idNuevoAnimal)
        console.log(imgAnimal)

        $('#Animales').append(`
        <div class = "col-4 p-4">
            <div class="card" style="width: 18rem;">
                <img id = "${idNuevoAnimal}" src="/assets/imgs/${imgAnimal}" class="card-img-top" alt="">
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg"><img class = "p-2" src="/assets/imgs/audio.svg" width = "50" ></button>
                </div>
            </div>
        </div>
    `)
        
})


$('#Serpiente').on('click', async function() {
    console.log('funciona')
})
