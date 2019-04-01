(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("scene1",
{ "height":20,
 "layers":[
        {
         "compression":"zlib",
         "data":"eJzt2NEKwjAMheF4o9suhMHW939UEVoIx6STmOrA80FB2m4MfrqBRURKHfR77HAu7HEu2OMWuEfkGrJhj7ux56KGxbqGYrDHrn57DXBuN\/ZQTO\/74Z0HGsfrgS2mN\/bQ56we+J7SLa516L2Ux+vxNMM8tqB83vtqFruHGPOUp9ejwW+HXttyH+fvtR5rHQ2egclY24Q9suH5WOW1DWKPcSL\/X7Wzwh75ej2Wrz0FNUc92rDWxFmjuHIwtEX6jYiIRnoADzYEkA==",
         "encoding":"base64",
         "height":20,
         "name":"Camada de Tiles 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "image":"..\/..\/..\/..\/..\/Downloads\/tileset.png",
         "imageheight":96,
         "imagewidth":224,
         "margin":0,
         "name":"tileset",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":21,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "firstgid":22,
         "image":"tileset.png",
         "imageheight":96,
         "imagewidth":224,
         "margin":0,
         "name":"tileset",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":21,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#ff00ff"
        }],
 "tilewidth":32,
 "version":1,
 "width":100
});