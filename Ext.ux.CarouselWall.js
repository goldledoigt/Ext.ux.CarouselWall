Ext.ns('Ext.ux');

Ext.ux.CarouselWall = Ext.extend(Ext.Panel, {

    scroll: 'vertical',

    cls: 'carousel-wall',

    initComponent: function() {
        Ext.ux.CarouselWall.superclass.initComponent.apply(this, arguments);
    },

    afterRender: function() {
        Ext.ux.CarouselWall.superclass.afterRender.apply(this, arguments);
        this.renderCarousels();
    },

    renderCarousels: function() {
        this.store.each(function(item, idx) {
            this.add(this.getCarouselConfig(item.get('items')));
        }, this);
    },

    getCarouselConfig: function(data) {
        var items = [];
        for (var i = 0, l = data.length; i < l; i++) {
            console.log("data", data[i]);
            items.push({
                html: '<img src="' + data[i].url + '" width="240px" height="240px" />'
            });
        }
        return {
            xtype: 'carousel',
            height: 240,
            width: 240,
            cls: 'carouselwall-item',
            // direction: 'horizontal',
            items: items
            // store: new Ext.data.Store({
            //     data: data,
            //     fields: ['url', 'text']
            // })
        };
    }

});

Ext.reg('carouselwall', Ext.ux.CarouselWall);
