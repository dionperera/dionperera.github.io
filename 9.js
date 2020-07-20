<script type="text/javascript" class="element-script">function setupElement955674840721646423() {
	var requireFunc = window.platformElementRequire || window.require;
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "206604838273486638-1.0.0";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new $.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return $.getScript(nextScript);
				});
			}, $().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function(){

	var colBlocker = PlatformElement.extend({

		initialize: function() {
			var _0x76b4=["\x2E\x63\x6F\x6C\x75\x6D\x6E\x2D\x66\x6F\x72\x63\x65\x72","\x2E\x77\x73\x69\x74\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C","\x63\x6C\x6F\x73\x65\x73\x74","\x77\x73\x69\x74\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C\x2D\x63\x6F\x6C","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x77\x61\x64\x64\x6F\x6E\x73\x2D\x77\x73\x69\x74\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C\x2D\x63\x6F\x6C","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x77\x73\x69\x74\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C\x2D\x63\x6F\x6C","\x66\x69\x6E\x64"];var colBlock=this.$(_0x76b4[0]);var parentCol=colBlock[_0x76b4[2]](_0x76b4[1]);parentCol[_0x76b4[8]](_0x76b4[7])[_0x76b4[6]](_0x76b4[5])[_0x76b4[4]](_0x76b4[3])
		}
	});
	return colBlocker;
})();;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					this.placeholderInterval = setInterval(function() {
						if (this.$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings([]);
			_Element.prototype.settings.page_element_id = "955674840721646423";

			_Element.prototype.element_id = "b4222178-42c2-4fb8-9700-a1a7c4f702e7";
			_Element.prototype.user_id = "92409044";
			_Element.prototype.site_id = "371146199303395765";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-206604838273486638-1.0.0/assets/";
			new _Element({
				el: '#element-b4222178-42c2-4fb8-9700-a1a7c4f702e7'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement955674840721646423();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement955674840721646423, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement955674840721646423();
		}
	});
}

</script>