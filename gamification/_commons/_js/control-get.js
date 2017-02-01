/* Read a page's GET URL variables and return them as an associative array.
 * ex: var first = getUrlVars(); <- to get all variables (without values)
 * ex: var first = getUrlVars()["Name"]; <- to get value of Name
 */

function getUrlVars() {
	var vars = [],
	    hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}

	return vars;
}

function getUrlFriendlyVars() {
	var vars = [];
	var hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('/') + 1).split('/');
	var valueAux = "";
	var hashesFinal = {};
	var findGludum = false;

	for (var i = 0; i < hashes.length; i++) {
		if (hashes[i] == "gamification") {
			hashesFinal[hashes[i + 1]] = hashes[i + 2];
			if (hashesFinal[hashes[i + 1]] != undefined) {
				valueAux = hashesFinal[hashes[i + 1]];
				valueAux = valueAux.split("-")[0];
				if (valueAux != undefined)
					hashesFinal[hashes[i + 1]] = valueAux;
			}
		} else {
			hashesFinal[hashes[i]] = hashes[i + 1];
			if (hashesFinal[hashes[i]] != undefined) {
				valueAux = hashesFinal[hashes[i]];
				valueAux = valueAux.split("-")[0];
				if (valueAux != undefined)
					hashesFinal[hashes[i]] = valueAux;
			}
		}
	}

	return hashesFinal;
}