let crystal_1 = 0
let crystal_2 = 0
let crystal_3 = 0
let crystal_4 = 0
const number_count = []


$("#start_game").on("click", function() {

    crystal_1 = Math.ceil(Math.random() * 100)
    crystal_2 = Math.ceil(Math.random() * 100)
    crystal_3 = Math.ceil(Math.random() * 100)
    crystal_4 = Math.ceil(Math.random() * 100)
    $("#score_1").text(crystal_1)
    $("#score_2").text(crystal_2)
    $("#score_3").text(crystal_3)
    $("#score_4").text(crystal_4)
    console.log(crystal_1)
    console.log(crystal_2)
    console.log(crystal_3)
    console.log(crystal_4)

    $("#start_game").hide()


})
