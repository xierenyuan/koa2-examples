import path from 'path';
import fs from 'fs';

const index = async function(ctx, next) {
    ctx.body = fs.createReadStream(path.join(__dirname, 'client/dist/index.html'));
};

export default {
    index
}