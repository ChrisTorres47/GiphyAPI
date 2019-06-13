var QueryUrl = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"
var topics = [Halo,Overwatch,Mariokart,LegendofZelda]

.ajax({
    url: QueryUrl,
    method: "GET"
})
.then(function(response){
    console.log(response)
});