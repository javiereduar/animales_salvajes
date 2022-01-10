
(async function iniciar () {
    let data = await fetch('data/animales.json')
    const data2 = await data.json()
    const animales = data2.animales
    //console.log(animales)

    $('#animal').on('change', function() {
        const nombre_animal = $('#animal').val();

        const animal = animales.find( an => an.name == nombre_animal)
        //console.log(animal)

        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)

    })


})()
