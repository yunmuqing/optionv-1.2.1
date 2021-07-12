ymq_define("Product",["jquery","Config","Cart","Html","Variant","Validate","Upload","jedate","dropdown","colpick"],(function(t,i,n,a,o,e,r,c){return class n{constructor(){var t=this;t.initConfig(),t.instance=null,t.variant=o.getInstance(),t.htmlBuilder=a.getInstance(),t.validate=e.getInstance(),t.upload=r.getInstance(),t.init()}initMemberVariables(){var t=this;t.variantJson={},t.scriptArr=[],t.quantityDomInited=!1,t.conditionArr=[],t.formData={},t.selectedValue={},t.ymq_condition={},t.ymq_total_price=0,t.ymq_total_price_single=0,t.ymq_option_price=0,t.ymq_option_price_single=0,t.quantityback=0,t.ogFormData=new FormData,t.needchange=!0}init(){this.initMemberVariables(),this.buildStyle().buildUploadModalDom().hidePaymentButton().hideShopifyDomAndRegisterAddCartEvent().disabledJqEvent().getShopifySelectDom().buildShopifyDom().buildYmqDom().buildVariantConditionName().buildQuantityDom().buildShowAddTotalPriceInfoDom().buildAddToCartDom().disabledSubmit().registerDeleteFileViewEvent().registerBuyItNowEvent().registerInputChangeEvent().buildFormData()}registerDeleteFileViewEvent(){var i=this;return t(document).on("click",".ymq_upload_file_item_del",(function(){var n=t(this),a=n.data("name"),o=n.data("num");i.upload.fileData.hasOwnProperty(a)&&i.upload.fileData[a].hasOwnProperty(o)&&delete i.upload.fileData[a][o],n.parents(".ymq-options-box").find('input[type="file"]').change().parents(".ymq_upload_new").removeClass("ymq_disabled"),n.parents(".ymq_upload_file_item").fadeOut().remove()})),i}buildUploadModalDom(){return this}de(i,n,a,o,e){if(i){var r={};if(ymq.$&&(r=ymq.$._data(i))&&r.events&&r.events[n])for(var c=0;c<r.events[n].length;c+=1)r.events[n][c].namespace!=o&&""!=o||(r.events[n][c].handler=function(){});if((r=t._data(i))&&r.events&&r.events[n])for(c=0;c<r.events[n].length;c+=1)r.events[n][c].namespace!=o&&""!=o||(r.events[n][c].handler=function(){})}}disabledJqEvent(){var t=this;return t.intervalResult(1e4,100,(function(){return window.$&&$.fn&&$.fn.jquery?ymq.$=$:window.jQuery&&jQuery.fn&&jQuery.fn.jquery&&(ymq.$=jQuery),ymq.$?(t.buildQuantityDom(),console.log("shopify jq"),t.doAddCart(),!0):"complete"==document.readyState})),t}intervalResult(t,i,n,a){"function"==typeof t?(a=i,n=t,i=1e3,t=20):"function"==typeof i&&(a=n,n=i,i=1e3),"function"!=typeof n&&(n=function(){return!1});var o=0,e=setInterval((function(){++o>t||n(o)?clearInterval(e):"function"==typeof a&&a()}),i)}doAddCart(){var i=n.config.util.getValue(n.config.ymq_option_branding.extra,"cart-ajax","0");if(1==Number(i))return!1;var n=this,a=t(n.config.form_box);n.I.each((function(t,i){n.de(i,"click","namespace","","disable")})),n.I.on("click.ymq",(function(i){if(n.buildFormData(),n.validate.validateAll(n.formData,!0),0!=n.validate.validateCount)return!1;n.buildFormData();var o=t(this);n.startLoading(o);var e=a.attr("action").match(/\/(\w{2})\/cart\/add/);if(n.getAjaxDataByFormData(),n.ogFormData.set("quantity",n.getQuantity()),n.ogFormData.set("id",t("#ymq-variant-id").val()),n.config.variantOriginal){var r=n.config.util.getValue(n.config.ymq_option_branding.extra,"variant-id-dom","");r&&t(r).length>0&&n.ogFormData.set("id",t(r).val())}if(window.fbq){var c=0;if(n.config.variantData.hasOwnProperty(n.variant.variant_id)){var d=n.config.variantData[n.variant.variant_id];c=d.price;fbq("track","AddToCart",{content_type:"product_group",content_ids:[n.config.product.id],currency:Shopify.currency.active,value:c/100+n.ymq_total_price,num_items:n.getQuantity(),content_name:d.title,content_category:n.config.product.type}),console.log("fbq done")}}t.ajax({type:"POST",url:"/cart/add",enctype:"multipart/form-data",processData:!1,contentType:!1,cache:!1,data:n.ogFormData}).done((function(t){window.location.href=e?"/"+e[1]+"/cart":"/cart"})).fail((function(i){if(console.log(i),n.config.variantData.hasOwnProperty(t("#ymq-variant-id").val())){var a=n.config.variantData[t("#ymq-variant-id").val()].name,e=n.config.util.getValue(n.config.ymq_option_branding.lan,"inventory_reminder","The product %s is already sold out.");alert(e.replace("%s",a))}n.endLoading(o)})),i.stopImmediatePropagation(),i.preventDefault()}))}hideShopifyDomAndRegisterAddCartEvent(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"add-cart-form-number",0);if(Number(n)==n)var a=t(i.config.form_box).eq(Number(n));else a=t(n);for(var o=i.config.shop,e=Shopify.theme.name.toLowerCase(),r=null,c=i.config.product,d=(["slimedotnet.myshopify.com","ridesharegear.myshopify.com","shoretees-ca.myshopify.com","winspear-picks.myshopify.com","sallureofficial.myshopify.com","the-million-roses-romania.myshopify.com","eventtechrentals.myshopify.com","hocwoman.myshopify.com","wigirlhair.myshopify.com","petshopmalta.myshopify.com","the2tails-mermaid-tails.myshopify.com","gwyllem.myshopify.com","kirudansk.myshopify.com","us-jewels-gems.myshopify.com","neweditionshop.myshopify.com","olemasonjar.myshopify.com","ronniemac69.myshopify.com","3bdshop0004.myshopify.com","teddy-winthrop.myshopify.com"].indexOf(o),t('\x3c!-- ymq custom product options by YMQ --\x3e\x3c!-- https://apps.shopify.com/ymq-options --\x3e<div id="ymq-box" class="ymq-box"></div>')),s=(a.find('[name="id"]'),t('<select id="test1111" name="id" style="display: none;"></select>')),p=0;p<c.variants.length;p+=1)s.append('<option value="'+c.variants[p].id+'"></option>');var u,l=[".productForm-block--options-inline .selector-wrapper",".swatches__container","#variations-content-product-template > .selector-wrapper",".product__variants__wrap",'.variations [class^="nt_select_pr_"]',".product__selectors .selector-wrapper, .selector-wrapper-secton .selector-wrapper",".ProductForm__Option","> .product-options.no-options > .product-type","div.select:not(.shopify-select)",".inline-field-wrapper","> .row > .col-sm-12.col-xs-12",".row .col-md-6.col-sm-12",".product-details-wrapper .product-options","> .product-options .swatches","> .product-options",".radio-wrapper",".product-single__variant","table.variations",".selection-wrapper.variant .selector-wrapper",".selection-wrapper.variant",".details_wrapper .color_product__options, .details_wrapper .size_product__options, .details_wrapper .single_product__options",".product-options--mobile, .product-options--desktop",".product-options",".select-container",".product-single__swatch",".lh-swatch-images, .lh-swatch-simple",".selector-wrapper:not(.full-width):not(.quantity-product-template)",".gf_swatches-selector",".product-form__option",".product-form__item:not(.product-form__item--quantity):not(.product-form__item--submit):not(.product-form__quantity-selector)",".variant-wrapper, > .swatches","[data-product-options-contariner]",".form__control","div.option",".form__control","#product-variants",".option-selectors",".variant-group",".form-field-swatch",'[class*="medium-item-grid"] .item, [class*="small-item-grid"] .item',".col-md-6.col-sm-12.col-xs-12:not(.selector-wrapper)",".product-options .swatches",".swatches-container",".tt-swatches-container .tt-wrapper",".tt-swatches-container",".variant-option",".option-header, .option-values",".product-option-list",'div[class="input-row"]',".product-form__controls-group .pf-container",".product-form__item",".variations","div[data-product-options-container]","[data-product-options-container]",".gf_variants-wrapper",".product-form__variants",'[data-label="(P) Variants"]','[data-label="(P) Swatches"]','[data-pf-type="ProductVariant"]',"> .js-product-options",".form__input-wrapper--select",".prd-block_options",".materialize-select",".c-cartform__label",".product-page--variants",".variants",".so-product-variants-wrap",".gt_product-swatches",".product-form--variants .radios--root, .product-form--variants .disclosure--root",".product-details__options .product-details__option-wrapper",".product-form-option",".so-custom-field-wrap",".sh-product-options",".product-page-info__variants"],m=i.config.util.getValue(i.config.ymq_option_branding.extra,"theme-variant-class","");if(""!=m&&(u.push(m),l.push(m)),i.config.replace&&(u=t(i.config.replace)),!u||!u.length)for(p=0;p<l.length;p+=1)if(0<(u=a.find(l[p])).length){".product-options--mobile, .product-options--desktop"===l[p]&&(u=u.add(a.find(".selector-wrapper:not(.full-width):not(.quantity-product-template)")));break}".product-form-wrapper .selector-wrapper"===l[p]&&setTimeout((function(){t(".product-form-options-wrapper").removeClass("large--hide")}),1e4);var y=":not(.scr-open-size-chart):not([data-quantity-action]):not(.js-qty-button):not(.uploadkit-button):not(.accordion__header):not(.quantity--input__button):not(.btn-num-product-down):not(.btn-num-product-up)";if("loft"===e&&0<a.find('[name="add"], .add-to-cart-btn').length?r=a.find('[name="add"], .add-to-cart-btn'):0<a.find("input#pre-order[type=submit]").length?r=a.find("input#pre-order[type=submit]").first():0<a.find("button[name=add]:not(.dummy_button_for)").length?r=a.find("button[name=add]:not(.dummy_button_for)"):0<a.find("input.add_to_cart, button.add_to_cart").length?r=a.find("input.add_to_cart, button.add_to_cart").first():0<a.find("button.add-to-cart, button.ProductForm__AddToCart").length?r=a.find("button.add-to-cart, button.ProductForm__AddToCart").first():0<a.find(".addToCart").length?r=a.find(".addToCart").first():0<a.find('button[type="submit"]'+y+", input[type=submit]").length?r=a.find('button[type="submit"]'+y+", input[type=submit]"):0<a.find("button"+y).length?r=a.find("button"+y).first():0<a.find(".btn-addtocart").length?r=a.find(".btn-addtocart").first():0<a.find(".shg-btn, .paira-add-to-cart").length&&(r=a.find(".shg-btn, .paira-add-to-cart").first()),r){if(c&&("pf-atc-button"===r.attr("id")||r.is('[data-pf-type="ProductATC"]')))(d=t("<button></button>")).html(r.html()),d.attr("class",r.attr("class")),r.replaceWith(d),r=d;setTimeout((function(){r.removeClass("disabled");try{r.attr("type","submit")}catch(t){}}),20)}if("optimizeinstagram.myshopify.com"===o?u=a.find(l[6]):"marei1998.myshopify.com"===o&&(u=a.find(".product-options label[for], .product-options label[for] + .select-wrapper")),r&&r.hasClass&&r.hasClass("shg-btn")){var f=t('<button type="submit" style="border: 0;" class="shg-btn" id="'+r.get(0).id+'">ADD TO CART</button>');r.replaceWith(f),(r=f).click((function(t){a.submit()}))}if(0<u.length){i.config.replace=l[p],u.parent().removeClass("d-none").removeClass("hide-for-all");var g=u.first().find('select, input[type="radio"], input[type="checkbox"]').first();g.length&&t._data(g.get(0),"events");".row .col-md-6.col-sm-12"!==l[p]&&".col-md-6.col-sm-12.col-xs-12:not(.selector-wrapper)"!==l[p]||d.find(".selector-wrapper").css({paddingLeft:15}),i.config.variantOriginal?u.last().css("marginBottom",Number(i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-original-margin-bottom",0))).after(d):u.first().before(d),d.parent().hide(),d.parent().show(),d.parent().removeClass("hide"),d.parent().parent().hide(),d.parent().parent().show(),d.parent().removeClass("hidden"),".gf_variants-wrapper"===l[p]&&t(l[p]+":first").closest('[data-label="(P) Variants"]').attr("id",""),d.last().after(a.find(".size-chart-link, .size-chart-container")),i.config.variantOriginal||u.each((function(i,n){0===t(n).find('input[name="quantity"]:not(.product-single__swatch__input), input[type="text"]:not(.select-dropdown):not([disabled="disabled"]), input[type="number"], input[type="submit"], button:not([aria-controls="modal-bohobi-size-chart"]):not(.custom-style-select-box)').filter(':not(.ProductForm__Item):not(.Popover__Value):not(.Popover__Close):not([data-activates]):not(.product-option-quantity):not([id^="SingleOptionSelector-"]):not([aria-controls="modal-size-chart"])').length&&t(n).hide()}))}else i.config.replace="no valid option found",a.prepend(d);var _=i.config.util.getValue(i.config.ymq_option_branding.extra,"hide-shopify-option","");""!=_&&t(_).hide();var h=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-hide","");""!=h&&t(h).hide();var q=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-show","");""!=q&&t(q).show();var v=a.find(".product-form-grid.product-form-grid-select");v.length&&(v.first().after(v.find(".product-quantity-label, .product-quantity-input")),a.find(".swatch, .product-form-grid.product-form-grid-select, .fake-choice, .product-variants-radio-btns").hide(),t(".product-single__meta > [itemscope] > .product-variants-item").hide());var b=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-add-to-cart","");if(""!=b)i.I=t(b);else{var w=t('form[action*="/cart/add"]'),D=(w=w.not('.ssw-product-form, #add-item-qv, [id^="product-actions"], .product-form--mini, .ca-form')).find('[name="add"], .add-to-cart-btn,#addToCart');D=D.add(r).add('.shopify-payment-button__button [role="button"], .shopify-payment-button__button [role="button"] span, .sticky_atc_js'),i.I=D}return i.doAddCart(),i}startLoading(t){t.addClass("ymq-btn-progress")}endLoading(t){t.removeClass("ymq-btn-progress")}hidePaymentButton(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"payment-button-hide",""),a="";return""!=n&&(a+=`\n\t\t\t\t\t${n}{\n\t\t\t\t\t\tdisplay: none!important;\n\t\t\t\t\t}\n\t\t\t\t`,t(n).hide()),a+='\n\t\t\t\t#dynamic-checkout-cart, .shopify-cleanslate, .additional-checkout-buttons,[data-shopify="payment-button"]{\n\t\t\t\t\tdisplay: none!important;\n\t\t\t\t}\n\t\t\t',t("#dynamic-checkout-cart, .shopify-cleanslate, .additional-checkout-buttons").hide(),t('[data-shopify="payment-button"]').hide().remove(),t(i.config.styleDomId).append(a),i}buildVariantConditionName(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-condition-label-class",""),a=i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-condition-value-parent-class","");return i.config.variantOriginal&&""!=n&&""!=a&&t(n).length>0&&t(a).length>0||(n=".ymq-shopify-option-box .ymq-option-title .ymq_lable",a=".ymq-shopify-option-box"),t(n).each((function(){t(this).parents(a).attr("name",`option-box-ymq-variant-${i.config.util.htmlSpecialChars(t(this).text()).trim()}`)})),this}buildStyle(){var i=this,n=":root{";Object.keys(i.config.ymq_option_branding).forEach((function(t){"lan"!=t&&"extra"!=t&&Object.keys(i.config.ymq_option_branding[t]).forEach((function(a){n+=`\n\t\t\t\t\t\t${a}: ${i.config.ymq_option_branding[t][a]};\n\t\t\t\t\t`}))})),n+="}";var a=i.config.util.getValue(i.config.ymq_option_branding.extra,"title-value","1,2,9,10");(a=a.split(",")).push(18,19);var o=[];return a.forEach((function(t){o.push(`.ymq-options-box-${t} .ymq_option_text_span`)})),n+=`\n\t\t\t\t${o.join(",")}{\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,n+=i.config.util.getValue(i.config.ymq_option_branding.extra,"extra-style-code",""),t(i.config.styleDomId).html(n),i}buildShopifyDom(){var t=this;return t.config.variantOriginal||t.variant.buildVariantHtml().isSoldOut(),t}buildYmqDom(){var t=this;return t.htmlBuilder.setJson(t.config.ymq_option_data,t.config.ymq_option_condition).buildtHtml(),t}disabledSubmit(){return t(this.config.form_box).submit((function(t){return t.preventDefault(),!1})),this}buildAddToCartDom(){var t=this;return t}getQuantity(){return parseInt(this.quantityDom.val())||1}reSetQtyByRadioValue(){var t=this.getQuantityGradeByRadioInput();null!=t&&this.setQuantity(t.quantity)}setQuantity(t){return isNaN(t)&&(t=1),t<1&&(t=1),this.quantityDom.val(t),this}setQuantityByQty(){var i=this;if(i.config.quantity_is_fix_type){var n=i.getQuantity();if(null!=(o=i.getQuantityGradeByRadioInput())){var a=o.quantity;n>a&&(t(".ymq-quantity-radio:checked").parents(".ymq-quantity-radio-box").next(".ymq-quantity-radio-box").find(".ymq-quantity-radio").trigger("click"),i.reSetQtyByRadioValue()),n<a&&(t(".ymq-quantity-radio:checked").parents(".ymq-quantity-radio-box").prev(".ymq-quantity-radio-box").find(".ymq-quantity-radio").trigger("click"),i.reSetQtyByRadioValue())}}else{var o,e=i.getQuantity();e=parseInt(e),isNaN(e)&&(e=1),!isNaN(i.config.min_quantity)&&e<i.config.min_quantity&&(e=i.config.min_quantity),!isNaN(i.config.max_quantity)&&e>i.config.max_quantity&&(e=i.config.max_quantity),i.setQuantity(e),null!=(o=i.getQuantityGradeByQtyInput())&&(0==t(`.ymq-quantity-radio-${o.quantity}`).length?t(".ymq-quantity-radio:checked").attr("checked",!1).prop("checked",!1):t(`.ymq-quantity-radio-${o.quantity}`).attr("checked")&&t(`.ymq-quantity-radio-${o.quantity}`).prop("checked")||(i.needchange=!1,t(`.ymq-quantity-radio-${o.quantity}`).trigger("click")))}}setQuantityByRadio(){var t=this,i=t.getQuantityGradeByRadioInput();return null!=i?t.setQuantity(i.quantity):isNaN(t.config.min_quantity)?t.setQuantity(1):t.setQuantity(t.config.min_quantity),t}getShopifyJqDom(i){return ymq.$?ymq.$(i):t(i)}buildQuantityDom(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"show-quantity","");if(""!=n&&t(n).length>0)var a=i.getShopifyJqDom(n);else a=i.getShopifyJqDom(`${i.config.form_box} [name="quantity"]`);if(a.length>=1)i.quantityDom=a;else{if(!i.quantityDomInited){if(0==i.config.util.getValue(i.config.ymq_option_branding.extra,"quantity-box",1))var o=`\n\t\t\t\t\t\t\t<div id="${i.config.quantity_box}" style="display: none!important;">\n\t\t\t\t\t\t\t\t<input id="${i.config.quantity_input}" value="1" readonly type="hidden">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;else o=`\n\t\t\t\t\t\t\t<div id="${i.config.quantity_box}">\n\t\t\t\t\t\t\t\t<div class="${i.config.quantity_change}" data-type="cut" id="${i.config.quantity_add}">-</div>\n\t\t\t\t\t\t\t\t<input id="${i.config.quantity_input}" value="1" type="text">\n\t\t\t\t\t\t\t\t<div class="${i.config.quantity_change}" data-type="add" id="${i.config.quantity_cut}">+</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;t("#ymq-box").append(o),i.quantityDomInited=!0}i.quantityDom=i.getShopifyJqDom(`#${i.config.quantity_input}`),console.log(i.config.quantity_has_value),i.config.quantity_is_fix_type&&i.config.quantity_has_value&&i.quantityDom.attr("readonly",!0).prop("readonly",!0)}return i.registerQuantityChangeEvent(),i.setQuantityByRadio(),i}buildShowAddTotalPriceInfoDom(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-price-in-product-page",""),a=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-compare-at-price-in-product-page","");if(!(""!=n&&t(n).length>0||""!=a&&t(a).length>0)){var o=`\n\t\t\t\t\t<div id="ymq-price-addons">\n\t\t\t\t\t\t${i.config.ymq_option_branding.lan.add_price_text.replace("%s",'<span id="ymq-addons-price"></span>')}\n\t\t\t\t\t</div>\n\t\t\t\t`;t("#ymq-box").append(o)}return i}registerQuantityChangeEvent(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"quantity-change","");return t(".ymq-quantity-change").each((function(t,n){i.de(n,"click","namespace","","disable")})),i.quantityDom.each((function(t,n){i.de(n,"change","namespace","ymq","disable")})),""!=n&&t(n).each((function(t,n){i.de(n,"click","namespace","ymq","disable")})),t(".ymq-quantity-change").on("click",(function(){console.log(".ymq-quantity-change 点击");var n=-1;"add"==t(this).data("type")&&(n=1);var a=i.getQuantity();a=Number(a),a+=n,i.setQuantity(a),i.quantityDom.change()})),""!=n&&t(n).on("click.ymq",(function(){i.quantityDom.change()})),i.quantityDom.on("change.ymq",(function(){console.log("执行change"),i.quantityChange()})),this}quantityChange(){this.setQuantityByQty(),this.buildFormData()}getQuantityGradeByQtyInput(){var t=this.getQuantity();return this.doGetQuantityGrade(t)}getQuantityGradeByRadioInput(){var i=t(".ymq-quantity-radio:checked").val();return this.doGetQuantityGrade(parseInt(i))}doGetQuantityGrade(t){var i=this,n=null;if(i.config.hasQuantity&&i.config.quantity_has_value)if(i.config.quantity_is_fix_type)try{Object.keys(i.config.quantity.options).forEach((function(a){if(t==a)throw n=i.config.quantity.options[a],new Error("breakForEach")}))}catch(t){if("breakForEach"!=t.message)throw t}else try{Object.keys(i.config.quantity.options).forEach((function(a){if(t>=a&&t<=i.config.quantity.options[a].quantity_max)throw n=i.config.quantity.options[a],new Error("breakForEach")}))}catch(t){if("breakForEach"!=t.message)throw t}return n}getShopifySelectDom(){var i=this;t(i.config.form_box).css("cssText","display:block !important;");var n=[],a=[],o=[],e=[];return t(i.config.form_box).find("select").each((function(){n=[],a=[],o=[];var e=t(this);t(this).find("option").each((function(){n.push(t(this).html()),a.push(t(this).val()),o.push(i.config.util.htmlSpecialChars(t(this).val()))})),Object.keys(i.config.ymq_shopify_options).forEach((function(t,r){JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(n)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(a)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(o)||(i.config.shopifySelectDom[t]={},i.config.shopifySelectDom[t].jq=e,i.config.shopifySelectDom[t].type="select",e.attr("id")?i.config.shopifySelectDom[t].id=e.attr("id"):(i.config.shopifySelectDom[t].id=`ymq_shopify_select_id_${t}`,e.attr("id",`ymq_shopify_select_id_${t}`)))}))})),t(i.config.form_box).find(":radio").each((function(){e.push(t(this).attr("name"))})),(e=t.unique(e)).forEach((function(n){a=[],o=[],t("input[name='"+n+"']").each((function(){a.push(t(this).val()),o.push(i.config.util.htmlSpecialChars(t(this).val()))}));var e=t("input[name='"+n+"']");Object.keys(i.config.ymq_shopify_options).forEach((function(t,r){JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(a)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(o)||(i.config.shopifySelectDom[t]={},i.config.shopifySelectDom[t].jq=e,i.config.shopifySelectDom[t].type="radio",i.config.shopifySelectDom[t].name=n)}))})),i}registerInputChangeEvent(){var i=this;return t(i.config.form_box).find('input[type="text"],input[type="number"],textarea').on("keyup",(function(){var n=t(this).parents(".ymq-options-box");i.buildFormData().validateOne(n)})),t(document).on("change",'form[action*="/cart/add"] input,form[action*="/cart/add"] select',(function(){if(t(this).hasClass("ymq-shopify-option")&&(i.variant.isSoldOut(),i.variant.changeUriByVariantId()),i.config.variantOriginal){var n=i.config.util.getUrlParam("variant");n&&(i.variant.variant_id=n,i.variant.changeVariantId())}var a=t(this).parents(".ymq-options-box");i.buildFormData().validateOne(a)})),t(document).on("change",".ymq-quantity-radio",(function(){i.needchange&&i.setQuantityByRadio().buildFormData(),i.needchange=!0})),i}validateOne(t){var i=this,n=t.data("name");return i.validate.validateOne(i.formData[n]),i}validateAll(t=!1){var i=this;return i.validate.validateAll(i.formData,t),i}registerBuyItNowEvent(){var i=this;return t("body").on("click",`#${i.config.buy_id_now}`,(function(){if(i.validate.validateAll(i.formData,!0),0!=i.validate.validateCount)return!1;var n={};n.item_count=t(`#${i.config.quantity_input}`).val(),n.items=[];var a={};a.variant_id=i.variant.variant_id,a.quantity=n.item_count,a.product_id=i.config.product.id,a.product_title=i.config.product.title,a.line_price=i.config.variantData[i.variant.variant_id].price*n.item_count,a.properties=i.getAjaxDataByFormData(!0),n.items.push(a),t.ajax({type:"POST",url:"https://option.ymq.cool/api/checkout",data:{data:n,shop:i.config.shop,token:i.config.token,timestamp:i.config.timestamp,customer_id:i.config.customer_id},dataType:"json",success:function(t){window.location.href=t.data},error:function(t){}})})),i}getAjaxDataByFormData(t=!1){var i=this,n={};return Object.keys(i.formData).forEach((function(a){if(0!=i.formData[a].value.length||i.formData[a].hasOwnProperty("isFile")){i.selectedValue=i.formData[a];var o=i.selectedValue.value.join(",");if(Number(i.selectedValue.price)>0&&(o+=` | ${i.config.doFormat(i.selectedValue.price,i.selectedValue.onetime)}`),t)n[a.substring(11,a.length-1)]=o;else if(i.formData[a].hasOwnProperty("isFile")){if(i.upload.fileData.hasOwnProperty(a)){var e=Object.keys(i.upload.fileData[a]).length;e>0&&Object.keys(i.upload.fileData[a]).forEach((function(t,n){i.ogFormData.set(1==e?a:i.reCreatName(a,n),i.upload.fileData[a][t].file,i.upload.fileData[a][t].name)}))}}else i.ogFormData.set(a,o),n[a]=o}})),n}reCreatName(t=null,i=0){return`properties[${t=t.substring(11,t.length-1)}_${i}]`}registerAddToCartEvent(){var i=this;return t("body").on("click",`#${i.config.add_to_cart}`,(function(){if(i.validate.validateAll(i.formData,!0),0!=i.validate.validateCount)return!1;t(this).addClass("ymq-btn-progress");var n=i.getAjaxDataByFormData();n.id=t("#ymq-variant-id").val(),n.quantity=i.getQuantity(),t.ajax({type:"POST",url:"/cart/add.js",data:n,dataType:"json",success:function(t){window.location.href="/cart"},error:function(i){t(this).removeClass("ymq-btn-progress")}})})),i}getMultiple(t){return-1!=this.config.multipleTypeArray.indexOf(Number(t))}buildFormData(){var i=this;i.formData={},t(i.config.form_box).find(".ymq-options-box").each((function(){var n=t(this).data("name"),a=Number(t(this).data("type")),o=t(this).data("class"),e=Number(t(this).data("onetime"));window.ymq_option.ymq_option_branding.extra.plan<2&&(e=0);var r={},c=t(this).find(`.${o}`),d=t(this).find(`.${o}:disabled`),s=t(this).data("validate");if(18==a||19==a){var p=i.getQuantityGradeByQtyInput();if(null!=p){var u=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-rang","qtyRange"),l=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount","discount"),m=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type","discountType"),y=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type-percentage","percentage"),f=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type-fixed","fixed"),g=i.config.util.getValue(i.config.ymq_option_branding.lan,"max-quantity","999999"),_=`${u}: ${p.quantity} - ${999999==Number(p.quantity_max?p.quantity_max:p.quantity)?g:Number(p.quantity_max?p.quantity_max:p.quantity)} | ${l}: ${p.discount} | ${m}: ${1==Number(p.discount_type)?y:f}`;r={onetime:0,price:0,validate:"",value:[_]}}else if(!(19!=a||isNaN(i.config.min_quantity)&&isNaN(i.config.max_quantity))){var h=1,q=i.config.max_num;isNaN(i.config.min_quantity)||(h=i.config.min_quantity),isNaN(i.config.max_quantity)||(q=i.config.max_quantity);u=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-rang","qtyRange");r={onetime:0,price:0,validate:"",value:[_=`${u}: ( ${h} - ${q} ) `]}}}else if(1==c.length){if(!c.prop("disabled"))if(r.onetime=e,7==a||3==a){r.value=[];var v=0;t(this).find("option").each((function(){t(this).prop("selected")&&(r.value.push(t(this).val()),t(this).data("price")&&(v-=-Number(t(this).data("price"))))})),r.price=v,r.validate=s}else if(!0,"radio"==c.attr("type")||"checkbox"==c.attr("type")){r.value=[];v=0;c.prop("checked")&&(r.value.push(c.val()),c.data("price")&&(v-=-Number(c.data("price")))),r.price=v,r.validate=s}else if("file"==c.prop("type")){if(r.value=[],""!=i.config.util.getValue(i.config.ymq_option_branding.extra,"upload-num-prompt","")){var b=0;i.upload.fileData.hasOwnProperty(n)&&(b=Object.keys(i.upload.fileData[n]).length),r.value.push(`(${b} / ${c.data("file-num")})`)}r.price=0,0!=r.value.length&&(r.price=c.data("price")?Number(c.data("price")):0),r.isFile=!0,r.name=n,r.validate=s}else r.value=""==c.val()?[]:[c.val()],r.price=0,0!=r.value.length&&(r.price=c.data("price")?Number(c.data("price")):0),r.validate=s}else if(c.length!=d.length){r.onetime=e,r.value=[];v=0;c.each((function(){t(this).prop("disabled")||t(this).prop("checked")&&(r.value.push(t(this).val()),t(this).data("price")&&(v-=-Number(t(this).data("price"))))})),r.price=v,r.validate=s}if(!t.isEmptyObject(r)){r.dom=c.eq(0),i.selectedValue=r;var w=i.selectedValue.value.join(",");if(Number(i.selectedValue.price)>0&&(w+=` | ${i.config.doFormat(i.selectedValue.price,e)}`),Number(i.selectedValue.price)>0){var D=i.config.util.getValue(i.config.ymq_option_branding.extra,"title-value","1,2,9,10");D=D.split(","),(t.inArray(a,D)>=0||t.inArray(a.toString(),D)>=0)&&t(this).find(".ymq_option_price_span").html(i.config.doFormat(i.selectedValue.price,e))}else t(this).find(".ymq_option_price_span").html("");t(this).find(".ymq_option_text_span").html(w),t(this).hasClass("ymq-shopify-option-box")||(i.formData[n]=r)}})),i.ymq_total_price=0,i.ymq_total_price_single=0,i.ymq_option_price=0,i.ymq_option_price_single=0;var n=i.getQuantity();return Object.keys(i.formData).forEach((function(t){1==Number(i.formData[t].onetime)?(i.ymq_total_price=Number(i.ymq_total_price)+Number(i.formData[t].price),i.ymq_option_price_single=Number(i.ymq_option_price_single)+Number(i.formData[t].price)):(i.ymq_total_price=Number(i.ymq_total_price)+Number(i.formData[t].price)*n,i.ymq_option_price=Number(i.ymq_option_price)+Number(i.formData[t].price)),i.ymq_total_price_single=Number(i.ymq_total_price_single)+Number(i.formData[t].price)})),i.price(),i.buildQuantityDiscount(),i}buildQuantityDiscount(){var i=this,n=i.config.variantData[i.variant.variant_id].price,a=i.config.util.getValue(i.config.ymq_option_branding.lan,"q-save","Save");return t(".ymq-quantity-radio-box").each((function(){var o,e=0,r=2,c=1,d=0;if(t(this).hasClass("ymq-quantity-show-box")){var s=i.getQuantityGradeByQtyInput();null!=s?(t(this).show(),e=Number(s.discount),r=Number(s.discount_type),c=i.getQuantity(),t(this).find(".ymq-quantity-buy-quantity").html(c),1==r?t(this).find(".ymq-quantity-discount").html(`${a} ${e}%`):t(this).find(".ymq-quantity-discount").html(`-${i.config.doFormat(e)}`)):t(this).hide()}else e=Number(t(this).find(".ymq-quantity-discount-price").data("discount")),r=Number(t(this).find(".ymq-quantity-discount-price").data("discount_type")),c=Number(t(this).find(".ymq-quantity-discount-price").data("quantity"));o=(Number(n)/100+Number(i.ymq_option_price))*c+Number(i.ymq_option_price_single),d=1==r?o*(1-e/100):o-e,t(this).find(".ymq-quantity-discount-price").html(i.config.doFormat(d)),t(this).find(".ymq-quantity-compared-price,.ymq-quantity-compared-price-no-discount").html(i.config.doFormat(o))})),i}price(){var i=this,n=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-price-in-product-page",""),a=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-compare-at-price-in-product-page","");if(""!=n&&t(n).length>0||""!=a&&t(a).length>0){if(i.config.variantData.hasOwnProperty(i.variant.variant_id)){var o=i.config.variantData[i.variant.variant_id],e=o.price,r=o.compare_at_price;console.log(e,n,t(n).length),""!=n&&t(n).length>0&&t(n).html(i.config.doFormat((100*Number(i.ymq_total_price_single)+Number(e))/100)),console.log(r,a,t(a).length),""!=a&&t(a).length>0&&r&&t(a).html(i.config.doFormat((100*Number(i.ymq_total_price_single)+Number(r))/100))}}else 0==Number(i.ymq_total_price)?t("#ymq-price-addons").slideUp(300,"swing"):t("#ymq-price-addons").slideDown(300,"swing"),t("#ymq-addons-price").html(i.config.doFormat(i.ymq_total_price));return i}initConfig(){var n=this;if(n.config=i.getInstance(),n.config.shop=window.ymq_option.shop,n.config.token=window.ymq_option.token,n.config.timestamp=window.ymq_option.timestamp,n.config.customer_id=window.ymq_option.customer_id,n.config.product=window.ymq_option.product,n.config.ymq_shopify_options=window.ymq_option.ymq_shopify_options,n.config.money_format=window.ymq_option.ymq_option_branding.lan.currency,n.config.form_box="",n.config.shopifySelectDom=[],t('form[action="/cart/add"]').length>=1)n.config.form_box='form[action="/cart/add"]';else if(t('form[action*="/cart/add"]').length>=1){var a=t('form[action*="/cart/add"]').attr("action");n.config.form_box=`form[action="${a}"]`}n.config.util.getUrlParam("ymq_view")?(n.config.ymq_variantjson=window.ymq_option.ymq_variantjson_yulan,n.config.ymq_option_data=window.ymq_option.ymq_option_data_yulan,n.config.ymq_option_condition=window.ymq_option.ymq_option_condition_yulan,n.config.ymq_option_template=window.ymq_option.ymq_option_template_yulan,n.config.ymq_option_template_condition=window.ymq_option.ymq_option_template_condition_yulan):(n.config.ymq_variantjson=window.ymq_option.ymq_variantjson,n.config.ymq_option_data=window.ymq_option.ymq_option_data,n.config.ymq_option_condition=window.ymq_option.ymq_option_condition,n.config.ymq_option_template=window.ymq_option.ymq_option_template,n.config.ymq_option_template_condition=window.ymq_option.ymq_option_template_condition),console.log(n.config.ymq_option_data),n.config.ymq_option_settings=window.ymq_option.ymq_option_settings,n.config.ymq_option_branding=window.ymq_option.ymq_option_branding,n.config.ymq_has_only_default_variant=window.ymq_option.ymq_has_only_default_variant,n.config.variantData={},n.config.product.variants.forEach((function(t){n.config.variantData[t.id]=t})),n.config.variantOriginal=!1,1==n.config.util.getValue(n.config.ymq_option_branding.extra,"variant-original",0)&&(n.config.variantOriginal=!0),n.config.onetimetag=` ( ${n.config.util.getValue(n.config.ymq_option_branding.lan,"one-time-tag","one time")} )`}static getInstance(){return this.instance||(this.instance=new n),this.instance}}}));