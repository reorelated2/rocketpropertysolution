(function (w, d, s, n, i) {
  w[n] = w[n] || [];
  w[n].push({
      'ts': new Date().getTime(),
      event: 'tm'
  });
  var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = n != 'pmq' ? '?d=' + n : '';
  j.async = true;
  j.src = 'https://static.pixglue.com/tm/' + i + '.js' + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'pmq', '2GB085G11431G450CF35D');
