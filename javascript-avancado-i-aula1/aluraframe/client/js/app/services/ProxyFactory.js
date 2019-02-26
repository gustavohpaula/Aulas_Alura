class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(new ListaNegociacoes(new Date(), 2, 100), {

            get: function (target, prop, receiver) {

                if (props.includes(prop) && typeof (target[prop] == typeof (Functio))) {

                    return function () {
                        console.log(`interceptando ${prop}`);

                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
        });
    }
}