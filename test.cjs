const assert=require('node:assert/strict');const {summarize,SEED_NAMES}=require('./app.js');
assert.equal(SEED_NAMES.length,8);
for(let w=0;w<3;w++)for(let r=0;r<3;r++){const s=summarize([{w,r}]);assert.equal(s.won,Number(r===0?w!==2:w===2));assert.equal(s.columns[w][r],1)}
const entries=[{w:null,r:3},{w:null,r:4}];const s=summarize(entries);assert.deepEqual(s.columns,[[0,0,0],[0,0,0],[0,0,0]]);assert.deepEqual(s.unclear,[1,1]);assert.equal(s.won,1);assert.equal(s.lost,1);entries.pop();assert.equal(summarize(entries).lost,0);assert.equal(summarize([]).won,0);console.log('Outcome attribution, unclear exclusion, Undo totals and seeded names passed.');
