var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ResidenceManagement_2 = new ol.format.GeoJSON();
var features_ResidenceManagement_2 = format_ResidenceManagement_2.readFeatures(json_ResidenceManagement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidenceManagement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidenceManagement_2.addFeatures(features_ResidenceManagement_2);
var lyr_ResidenceManagement_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_ResidenceManagement_2, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Residence Management'
            });
var format_Property_Management_3 = new ol.format.GeoJSON();
var features_Property_Management_3 = format_Property_Management_3.readFeatures(json_Property_Management_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Property_Management_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Property_Management_3.addFeatures(features_Property_Management_3);
var lyr_Property_Management_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Property_Management_3, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Property_Management '
            });
var format_HOA_4 = new ol.format.GeoJSON();
var features_HOA_4 = format_HOA_4.readFeatures(json_HOA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOA_4.addFeatures(features_HOA_4);
var lyr_HOA_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_HOA_4, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'HOA'
            });
var format_Hoteles_Google_Otros_5 = new ol.format.GeoJSON();
var features_Hoteles_Google_Otros_5 = format_Hoteles_Google_Otros_5.readFeatures(json_Hoteles_Google_Otros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_Otros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_Otros_5.addFeatures(features_Hoteles_Google_Otros_5);
var lyr_Hoteles_Google_Otros_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_Google_Otros_5, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles_Google_Otros'
            });
var format_Hoteles_Google_3_starhotel_6 = new ol.format.GeoJSON();
var features_Hoteles_Google_3_starhotel_6 = format_Hoteles_Google_3_starhotel_6.readFeatures(json_Hoteles_Google_3_starhotel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_3_starhotel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_3_starhotel_6.addFeatures(features_Hoteles_Google_3_starhotel_6);
var lyr_Hoteles_Google_3_starhotel_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_Google_3_starhotel_6, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles_Google_3_star hotel'
            });
var format_Hoteles_Google_4_starhotel_7 = new ol.format.GeoJSON();
var features_Hoteles_Google_4_starhotel_7 = format_Hoteles_Google_4_starhotel_7.readFeatures(json_Hoteles_Google_4_starhotel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_4_starhotel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_4_starhotel_7.addFeatures(features_Hoteles_Google_4_starhotel_7);
var lyr_Hoteles_Google_4_starhotel_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_Google_4_starhotel_7, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles_Google_4_star hotel'
            });
var format_Hoteles_Google_5_starhotel_8 = new ol.format.GeoJSON();
var features_Hoteles_Google_5_starhotel_8 = format_Hoteles_Google_5_starhotel_8.readFeatures(json_Hoteles_Google_5_starhotel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_5_starhotel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_5_starhotel_8.addFeatures(features_Hoteles_Google_5_starhotel_8);
var lyr_Hoteles_Google_5_starhotel_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_Google_5_starhotel_8, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles_Google_5_star hotel '
            });
var format_0a5personas_9 = new ol.format.GeoJSON();
var features_0a5personas_9 = format_0a5personas_9.readFeatures(json_0a5personas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0a5personas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0a5personas_9.addFeatures(features_0a5personas_9);
var lyr_0a5personas_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_0a5personas_9, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '0 a 5 personas'
            });
var format_6a10personas_10 = new ol.format.GeoJSON();
var features_6a10personas_10 = format_6a10personas_10.readFeatures(json_6a10personas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6a10personas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6a10personas_10.addFeatures(features_6a10personas_10);
var lyr_6a10personas_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_6a10personas_10, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '6 a 10 personas'
            });
var format_11a30personas_11 = new ol.format.GeoJSON();
var features_11a30personas_11 = format_11a30personas_11.readFeatures(json_11a30personas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11a30personas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11a30personas_11.addFeatures(features_11a30personas_11);
var lyr_11a30personas_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_11a30personas_11, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '11 a 30 personas'
            });
var format_31a50personas_12 = new ol.format.GeoJSON();
var features_31a50personas_12 = format_31a50personas_12.readFeatures(json_31a50personas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31a50personas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31a50personas_12.addFeatures(features_31a50personas_12);
var lyr_31a50personas_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_31a50personas_12, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '31 a 50 personas'
            });
var format_51a100personas_13 = new ol.format.GeoJSON();
var features_51a100personas_13 = format_51a100personas_13.readFeatures(json_51a100personas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51a100personas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51a100personas_13.addFeatures(features_51a100personas_13);
var lyr_51a100personas_13 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_51a100personas_13, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '51 a 100 personas'
            });
var format_101a250personas_14 = new ol.format.GeoJSON();
var features_101a250personas_14 = format_101a250personas_14.readFeatures(json_101a250personas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101a250personas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101a250personas_14.addFeatures(features_101a250personas_14);
var lyr_101a250personas_14 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_101a250personas_14, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '101 a 250 personas'
            });
var format_251ymspersonas_15 = new ol.format.GeoJSON();
var features_251ymspersonas_15 = format_251ymspersonas_15.readFeatures(json_251ymspersonas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_251ymspersonas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_251ymspersonas_15.addFeatures(features_251ymspersonas_15);
var lyr_251ymspersonas_15 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_251ymspersonas_15, 
                radius: 4 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: '251 y más personas'
            });
var format_Viveros_16 = new ol.format.GeoJSON();
var features_Viveros_16 = format_Viveros_16.readFeatures(json_Viveros_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viveros_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viveros_16.addFeatures(features_Viveros_16);cluster_Viveros_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Viveros_16
});
var lyr_Viveros_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Viveros_16, 
                style: style_Viveros_16,
                popuplayertitle: "Viveros",
                interactive: true,
                title: '<img src="styles/legend/Viveros_16.png" /> Viveros'
            });
var format_Contratistas_17 = new ol.format.GeoJSON();
var features_Contratistas_17 = format_Contratistas_17.readFeatures(json_Contratistas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_17.addFeatures(features_Contratistas_17);
var lyr_Contratistas_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contratistas_17, 
                style: style_Contratistas_17,
                popuplayertitle: "Contratistas",
                interactive: true,
                title: '<img src="styles/legend/Contratistas_17.png" /> Contratistas'
            });
var group_Mapasdecalorhoteles = new ol.layer.Group({
                                layers: [lyr_Hoteles_Google_Otros_5,lyr_Hoteles_Google_3_starhotel_6,lyr_Hoteles_Google_4_starhotel_7,lyr_Hoteles_Google_5_starhotel_8,lyr_0a5personas_9,lyr_6a10personas_10,lyr_11a30personas_11,lyr_31a50personas_12,lyr_51a100personas_13,lyr_101a250personas_14,lyr_251ymspersonas_15,],
                                fold: "open",
                                title: "Mapas de calor hoteles"});
var group_MapadecalorManagementyHOA = new ol.layer.Group({
                                layers: [lyr_ResidenceManagement_2,lyr_Property_Management_3,lyr_HOA_4,],
                                fold: "open",
                                title: "Mapa de calor Management y HOA"});
var group_HotelesGoogle = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Hoteles Google"});
var group_CVS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CVS"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_ResidenceManagement_2.setVisible(false);lyr_Property_Management_3.setVisible(false);lyr_HOA_4.setVisible(false);lyr_Hoteles_Google_Otros_5.setVisible(false);lyr_Hoteles_Google_3_starhotel_6.setVisible(false);lyr_Hoteles_Google_4_starhotel_7.setVisible(false);lyr_Hoteles_Google_5_starhotel_8.setVisible(false);lyr_0a5personas_9.setVisible(false);lyr_6a10personas_10.setVisible(false);lyr_11a30personas_11.setVisible(false);lyr_31a50personas_12.setVisible(false);lyr_51a100personas_13.setVisible(false);lyr_101a250personas_14.setVisible(false);lyr_251ymspersonas_15.setVisible(true);lyr_Viveros_16.setVisible(false);lyr_Contratistas_17.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,group_MapadecalorManagementyHOA,group_Mapasdecalorhoteles,lyr_Viveros_16,lyr_Contratistas_17];
lyr_Viveros_16.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Direccio_1': 'Direccio_1', 'Telefono': 'Telefono', 'Email': 'Email', 'Pagina WEB': 'Pagina WEB', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Contratistas_17.set('fieldAliases', {'Datos': 'Datos', 'Municipio': 'Municipio', 'Link_Googl': 'Link_Googl', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Direccion Google': 'Direccion Google', 'Telefono': 'Telefono', 'Pagina Web': 'Pagina Web', 'Comentario': 'Comentario', 'email': 'email', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Viveros_16.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Direccio_1': 'TextEdit', 'Telefono': 'TextEdit', 'Email': 'TextEdit', 'Pagina WEB': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Contratistas_17.set('fieldImages', {'Datos': '', 'Municipio': '', 'Link_Googl': '', 'Nombre': '', 'Tipo': '', 'Direccion Google': '', 'Telefono': '', 'Pagina Web': '', 'Comentario': '', 'email': '', 'Latitud': '', 'Longitud': '', });
lyr_Viveros_16.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Direccio_1': 'hidden field', 'Telefono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagina WEB': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'hidden field', 'longitud': 'hidden field', });
lyr_Contratistas_17.set('fieldLabels', {'Datos': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Link_Googl': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Direccion Google': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Comentario': 'inline label - visible with data', 'email': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Contratistas_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});