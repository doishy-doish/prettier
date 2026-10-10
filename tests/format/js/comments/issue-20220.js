async function doStuff(
    arg1 /*: string */, // The first arg
    arg2 /*: string */ // The second arg
) /*: Promise<string> */ // The return value
{
  console.log('thanks!');
}

function short(a, b /*: string */) /*: number */ {
  return 1;
}
