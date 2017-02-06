(function ($) {

    $.fn.modalup = function (options) {
        // ModalUp's default settings:        
        var defaults = {
            tittle: "Hello ModalUP",
            closeHeader: true,
            closeButton: true,
            closeButtonName: "Close",
            functionButton: true,
            functionButtonName: "Do something",
            body: "<h1>Hello world</h1>",
            modalSettings: {
                class: "modal fade",
                id: "modalup"
            },
            dialogSettings: {
                class: "modal-dialog",
                rol: "document"
            },
            headerSettings: {
                class: "modal-header"
            },
            containerSettings: {
                class: "modal-header"
            },
            footerSettings: {
                class: "modal-footer"
            },
            bodySettings: {
                class: "modal-body"
            },
            functionButtonSettings: {
                class: "btn btn-primary"
            },
            closeButtonSettings: {
                'data-dismiss': "modal",
                class: "btn btn-secondary"
            },
            closeheaderSettings: {
                class: "close",
                'data-dismiss': "modal",
                'aria-label': "Close"
            },
            modalCSS: {
            },
            containerCSS: {
            },
            dialogCSS: {
            },
            headerCSS: {
            },
            footerCSS: {
            },
            bodyCSS: {
            }
        };
        var settings = $.extend({}, defaults, options);

        // Contenedores del modal(Modal Containers):
        var modal = $("<div />")
                .attr(settings.modalSettings)
                .css(settings.modalCSS);
        var dialog = $("<div />")
                .attr(settings.dialogSettings)
                .css(settings.dialogCSS)
                ;
        var modalContainer = $("<div />")
                .attr(settings.containerSettings)
                .css(settings.containerCSS)
                .appendTo(dialog);

        var modalHeader = $("<div />")
                .attr(settings.headerSettings)
                .css(settings.headerCSS)
                .appendTo(modalContainer);

        var modalBody = $("<div />")
                .attr(settings.bodySettings)
                .css(settings.bodyCSS)
                .appendTo(modalContainer);
        var modalFooter = $("<div />")
                .attr(settings.footerSettings)
                .css(settings.footerCSS)
                .appendTo(modalContainer);

//      Elementos del modal(Modal elements)
//      
//      Elementos de la cabecera(Header Elements)
        if (settings.closeHeader) {
            var closeHeaderButton = $("button")
                    .attr(settings.closeheaderSettings)                    
                    .appendTo(modalHeader);
        }
        var titleHeader = $("h1")
                .attr({text: settings.tittle})
                .appendTo(modalHeader);

//      Elementos del pie de pagina(footer elements)
        if (settings.closeButton) {
            var closeFooterButton = $("button")
                    .attr({text: settings.closeButtonName})                    
                    .appendTo(modalFooter);
        }
        if (settings.functionButton) {
            var functionFooterButton = $("button")
                    .attr({text: settings.functionButtonName})                    
                    .appendTo(modalFooter);
        }
//        Elementos del cuerpo del modal (Body elements)
        $(modalBody).append(settings.body);

        return this.each(function () {
            $(document).append(modal);
            $('#modalup').modal('show');
        });

    };

}(jQuery));

