#!/usr/bin/env node


// Implement modulo by replacing the negative operand 
// with an equivalent positive operand that has the same wrap-around effect
function funcmod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}
module.exports = {funcmod}
