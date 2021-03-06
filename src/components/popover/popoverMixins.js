/**
 * @file PopoverMixin pass event param for eventlistener
 */
import EventListener from '../../utils/EventListener.js';
import coerceBoolean from '../../utils/coerceBoolean.js';

export default {
    'props': {
        'trigger': {
            'type': String,
            'default': 'click'
        },
        'effect': {
            'type': String,
            'default': 'fadein'
        },
        'title': {
            'type': String
        },
        'content': {
            'type': String
        },
        'header': {
            'type': Boolean,
            'coerce': coerceBoolean,
            'default': true
        },
        'placement': {
            'type': String
        }
    },
    data() {
        return {
            'position': {
                'top': 0,
                'left': 0
            },
            'show': true
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        fixPosition(triger, popover, placement) {
            popover.style.display = '';
            switch (placement) {
                case 'top' :
                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                    this.position.top = triger.offsetTop - popover.offsetHeight;
                    break;
                case 'left':
                    this.position.left = triger.offsetLeft - popover.offsetWidth;
                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                    break;
                case 'right':
                    this.position.left = triger.offsetLeft + triger.offsetWidth;
                    this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                    break;
                case 'bottom':
                    this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                    this.position.top = triger.offsetTop + triger.offsetHeight;
                    break;
                default:
            }
            popover.style.top = this.position.top + 'px';
            popover.style.left = this.position.left + 'px';
            popover.style.display = 'none';

            this.show = !this.show;
        }
    },
    ready() {
        if (!this.$els.popover) {
            // return console.error('Could not find popover v-el in your component that uses popoverMixin');
        }
        const triger = this.$els.trigger.children[0];
        let that = this;
        if (this.trigger === 'hover') {
            this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', function () {
                that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                that.show = true;
            });
            this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', function () {
                that.show = false;
            });
        }
        else if (this.trigger === 'focus') {
            this._focusEvent = EventListener.listen(triger, 'focus', function () {
                that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                that.show = true;
            });
            this._blurEvent = EventListener.listen(triger, 'blur', function () {
                that.show = false;
            });
        }
        else {
            this._clickEvent = EventListener.listen(triger, 'click', function () {
                that.fixPosition(that.$els.trigger.children[0], that.$els.popover, that.placement);
                that.toggle;
            });
        }

        that.fixPosition(this.$els.trigger.children[0], this.$els.popover, this.placement);
    },
    beforeDestroy() {
        if (this._blurEvent) {
            this._blurEvent.remove();
            this._focusEvent.remove();
        }
        if (this._mouseenterEvent) {
            this._mouseenterEvent.remove();
            this._mouseleaveEvent.remove();
        }
        if (this._clickEvent) {
            this._clickEvent.remove();
        }
    }
};
