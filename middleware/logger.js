export default function mLogger() {
    return function* mLogger(next) {
        const start = new Date();
        yield next;
        const ms = new Date() - start;
        console.log(`${this.method} ${this.url} - ${ms}ms`);
    }
}