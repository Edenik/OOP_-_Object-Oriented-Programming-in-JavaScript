function extend(Child, Parent){
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        if (this.items.includes(item))
            this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
        <select>${this.items.map(item => ` 
        <option>${item}</option>`).join('')}
        </select>`;
    }

}

function HtmlImageElement(src = undefined) {
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}" />`;
    }
}


extend(HtmlSelectElement, HtmlElement);
extend(HtmlImageElement, HtmlElement);

const e = new HtmlElement();
console.log(e)

const s = new HtmlSelectElement([1, 2, 3]);
console.log(s)

const i = new HtmlImageElement();
console.log(i)