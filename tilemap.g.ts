// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010101010101010101010101010101010a090401010101010105020202040101010107010101010105080c0c0c02010101010601010101010201010101020c0101010302040101050801010101020c010101010c070105080101010101020c010101010c0201020101010101010201010101010c07010304010101010103020b0101010c02010103040101010101010101010509080101010304010101010101010106010101010101030204010101010101030401010101010101030401010101010103040101010c01010103040101010101010304010502040c0c01020c0101010101010302080c0302020208010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.builtin.forestTiles0,myTiles.tile1,sprites.builtin.forestTiles8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
