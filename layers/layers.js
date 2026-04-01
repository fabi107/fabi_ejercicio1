var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_casa_UTM8418S_1 = new ol.format.GeoJSON();
var features_casa_UTM8418S_1 = format_casa_UTM8418S_1.readFeatures(json_casa_UTM8418S_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_UTM8418S_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_UTM8418S_1.addFeatures(features_casa_UTM8418S_1);
cluster_casa_UTM8418S_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_casa_UTM8418S_1
});
var lyr_casa_UTM8418S_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_casa_UTM8418S_1, 
                style: style_casa_UTM8418S_1,
                popuplayertitle: 'casa_UTM8418S',
                interactive: true,
                title: '<img src="styles/legend/casa_UTM8418S_1.png" /> casa_UTM8418S'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_casa_UTM8418S_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_casa_UTM8418S_1];
lyr_casa_UTM8418S_1.set('fieldAliases', {'id': 'id', 'T_pregunt': 'T_pregunt', 'N_Preg_Cor': 'N_Preg_Cor', 'N_Preg_Inc': 'N_Preg_Inc', 'Porc_Corr': 'Porc_Corr', 'Porc_total': 'Porc_total', 'Nombre': 'Nombre', 'VIDEO': 'VIDEO', });
lyr_casa_UTM8418S_1.set('fieldImages', {'id': 'TextEdit', 'T_pregunt': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'Porc_Corr': 'TextEdit', 'Porc_total': 'TextEdit', 'Nombre': 'TextEdit', 'VIDEO': 'TextEdit', });
lyr_casa_UTM8418S_1.set('fieldLabels', {'id': 'no label', 'T_pregunt': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'Porc_Corr': 'inline label - always visible', 'Porc_total': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'VIDEO': 'inline label - always visible', });
lyr_casa_UTM8418S_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});