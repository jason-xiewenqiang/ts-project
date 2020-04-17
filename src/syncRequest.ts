import qs from 'qs'

function syncRequest(url: string, _data = {}, method = 'GET', headers: any) {
  if (!url) { throw new Error('url is required!') }

  const xmlhttp: XMLHttpRequest = new XMLHttpRequest()
  const data: object = Object.assign({}, _data)

  let res

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        res = xmlhttp.responseText
      } else {
        console.error('Problem retrieving data:' + xmlhttp.statusText)
      }
    }
  }

  headers = Object.assign({}, headers)

  if (method === 'GET' && Object.keys(data).length > 0) {
    url = url + (url.indexOf('?') > -1 ? '&' : '?') + qs.stringify(data)
  }

  xmlhttp.open(method, url, false)
  for (const x in headers) {
    xmlhttp.setRequestHeader(x, headers[x])
  }
  if (method === 'POST' && !headers['Content-type']) {
    xmlhttp.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded; charset=utf-8'
    )
  }

  xmlhttp.send(
    method === 'GET' || Object.keys(data).length === 0 ?
    null :
    qs.stringify(data)
  )
  
  if (res) {
    res = JSON.parse(res)
    if (res.code === 996) { return [] }
  }
  return res
}

export default syncRequest
