// req.body.js
   after signup, req  { _readableState: 
                   { highWaterMark: 16384,
                     buffer: [],
                     length: 0,
                     pipes: null,
                     pipesCount: 0,
                     flowing: false,
                     ended: false,
                     endEmitted: false,
                     reading: false,
                     calledRead: false,
                     sync: true,
                     needReadable: false,
                     emittedReadable: false,
                     readableListening: false,
                     objectMode: false,
                     defaultEncoding: 'utf8',
                     ranOut: false,
                     awaitDrain: 0,
                     readingMore: false,
                     oldMode: false,
                     decoder: null,
                     encoding: null },
                readable: true,
                domain: null,
                _events: {},
                _maxListeners: 10,
                socket: 
                 { _connecting: false,
                   _handle: 
                    { fd: 13,
                      writeQueueSize: 0,
                      owner: [Circular],
                      onread: [Function: onread],
                      reading: true },
                   _readableState: 
                    { highWaterMark: 16384,
                      buffer: [],
                      length: 0,
                      pipes: null,
                      pipesCount: 0,
                      flowing: false,
                      ended: false,
                      endEmitted: false,
                      reading: true,
                      calledRead: true,
                      sync: false,
                      needReadable: true,
                      emittedReadable: false,
                      readableListening: false,
                      objectMode: false,
                      defaultEncoding: 'utf8',
                      ranOut: false,
                      awaitDrain: 0,
                      readingMore: false,
                      oldMode: false,
                      decoder: null,
                      encoding: null },
                   readable: true,
                   domain: null,
                   _events: 
                    { end: [Object],
                      finish: [Function: onSocketFinish],
                      _socketEnd: [Function: onSocketEnd],
                      drain: [Object],
                      timeout: [Function],
                      error: [Function],
                      close: [Object] },
                   _maxListeners: 10,
                   _writableState: 
                          { highWaterMark: 16384,
                            objectMode: false,
                            needDrain: false,
                            ending: false,
                            ended: false,
                            finished: false,
                            decodeStrings: false,
                            defaultEncoding: 'utf8',
                            length: 0,
                            writing: false,
                            sync: false,
                            bufferProcessing: false,
                            onwrite: [Function],
                            writecb: null,
                            writelen: 0,
                            buffer: [],
                            errorEmitted: false },
                         writable: true,
                         allowHalfOpen: true,
                         onend: [Function],
                         destroyed: false,
                         bytesRead: 1698,
                         _bytesDispatched: 390,
                         _pendingData: null,
                         _pendingEncoding: '',
                         server: 
                          { domain: null,
                            _events: [Object],
                            _maxListeners: 10,
                            _connections: 1,
                            connections: [Getter/Setter],
                            _handle: [Object],
                            _usingSlaves: false,
                            _slaves: [],
                            allowHalfOpen: true,
                            httpAllowHalfOpen: false,
                            timeout: 120000,
                            _connectionKey: '4:0.0.0.0:3000' },
                         _idleTimeout: 120000,
                         _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
                         _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
                         _idleStart: 1407280045115,
     parser: 
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: [Circular],
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
               ondata: [Function],
               _paused: false,
               _httpMessage: 
                { domain: null,
                  _events: [Object],
                  _maxListeners: 10,
                  output: [],
                  outputEncodings: [],
                  writable: true,
                  _last: false,
                  chunkedEncoding: false,
                  shouldKeepAlive: true,
                  useChunkedEncodingByDefault: true,
                  sendDate: true,
                  _headerSent: false,
                  _header: '',
                  _hasBody: true,
                  _trailer: '',
                  finished: false,
                  _hangupClose: false,
                  socket: [Circular],
                  connection: [Circular],
                  _headers: [Object],
                  _headerNames: [Object],
                  req: [Circular],
                  locals: {},
                  writeHead: [Function] } },
            connection: 
             { _connecting: false,
               _handle: 
                { fd: 13,
                  writeQueueSize: 0,
                  owner: [Circular],
                  onread: [Function: onread],
                  reading: true },
               _readableState: 
                { highWaterMark: 16384,
                  buffer: [],
                  length: 0,
                  pipes: null,
                  pipesCount: 0,
                  flowing: false,
                  ended: false,
                  endEmitted: false,
                  reading: true,
                  calledRead: true,
                  sync: false,
                  needReadable: true,
                  emittedReadable: false,
                  readableListening: false,
                  objectMode: false,
                  defaultEncoding: 'utf8',
                  ranOut: false,
                  awaitDrain: 0,
                  readingMore: false,
                  oldMode: false,
                  decoder: null,
                  encoding: null },
               readable: true,
     domain: null,
     _events: 
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState: 
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [],
        errorEmitted: false },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     bytesRead: 1698,
     _bytesDispatched: 390,
     _pendingData: null,
     _pendingEncoding: '',
     server: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 1,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:3000' },
     _idleTimeout: 120000,
     _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idleStart: 1407280045115,
     parser: 
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: [Circular],
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _paused: false,
     _httpMessage: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _headerSent: false,
        _header: '',
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Circular],
        connection: [Circular],
        _headers: [Object],
        _headerNames: [Object],
        req: [Circular],
        locals: {},
        writeHead: [Function] } },
  httpVersion: '1.1',
  complete: false,
  headers: 
   { host: 'localhost:3000',
     connection: 'keep-alive',
     'content-length': '0',
     'cache-control': 'max-age=0',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     origin: 'http://localhost:3000',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
     'content-type': 'application/x-www-form-urlencoded',
     referer: 'http://localhost:3000/signup',
     'accept-encoding': 'gzip,deflate,sdch',
     'accept-language': 'en-US,en;q=0.8',
     cookie: 'session with cookie data=eyJwYXNzcG9ydCI6e319; session with cookie data.sig=YPOibbTRWcG6-1pbO8Ff-kf1bAo' },
  trailers: {},
  _pendings: [],
  _pendingIndex: 0,
  url: '/submit',
  method: 'POST',
  statusCode: null,
  client: 
   { _connecting: false,
     _handle: 
      { fd: 13,
        writeQueueSize: 0,
        owner: [Circular],
        onread: [Function: onread],
        reading: true },
     _readableState: 
      { highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: false,
        ended: false,
        endEmitted: false,
        reading: true,
        calledRead: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        objectMode: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        oldMode: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events: 
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState: 
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [],
        errorEmitted: false },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     bytesRead: 1698,
     _bytesDispatched: 390,
     _pendingData: null,
     _pendingEncoding: '',
     server: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 1,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:3000' },
     _idleTimeout: 120000,
     _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
     _idleStart: 1407280045115,
     parser: 
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: [Circular],
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _paused: false,
     _httpMessage: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _headerSent: false,
        _header: '',
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Circular],
        connection: [Circular],
        _headers: [Object],
        _headerNames: [Object],
        req: [Circular],
        locals: {},
        writeHead: [Function] } },
  _consuming: false,
  _dumped: false,
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  upgrade: false,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/submit',
  _parsedUrl: 
   { protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/submit',
     path: '/submit',
     href: '/submit',
     _raw: '/submit' },
  params: {},
  query: {},
  res: 
   { domain: null,
     _events: { finish: [Function] },
     _maxListeners: 10,
     output: [],
     outputEncodings: [],
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _headerSent: false,
     _header: '',
     _hasBody: true,
     _trailer: '',
     finished: false,
     _hangupClose: false,
     socket: 
      { _connecting: false,
        _handle: [Object],
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _maxListeners: 10,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        onend: [Function],
        destroyed: false,
        bytesRead: 1698,
        _bytesDispatched: 390,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 1407280045115,
        parser: [Object],
        ondata: [Function],
        _paused: false,
        _httpMessage: [Circular] },
     connection: 
      { _connecting: false,
        _handle: [Object],
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _maxListeners: 10,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        onend: [Function],
        destroyed: false,
        bytesRead: 1698,
        _bytesDispatched: 390,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 1407280045115,
        parser: [Object],
        ondata: [Function],
        _paused: false,
        _httpMessage: [Circular] },
     _headers: { 'x-powered-by': 'Express' },
     _headerNames: { 'x-powered-by': 'X-Powered-By' },
     req: [Circular],
     locals: {},
     writeHead: [Function] },
  body: {},
  sessionCookies: 
   { request: [Circular],
     response: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _headerSent: false,
        _header: '',
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Object],
        connection: [Object],
        _headers: [Object],
        _headerNames: [Object],
        req: [Circular],
        locals: {},
        writeHead: [Function] },
     keys: { sign: [Function], verify: [Function], index: [Function] } },
  sessionOptions: 
   { secret: 'mysecretkey',
     name: 'session with cookie data',
     maxage: 360000,
     overwrite: true,
     httpOnly: true,
     signed: true },
  sessionKey: 'session with cookie data',
  session: [Getter/Setter],
  _passport: 
   { instance: 
      { _key: 'passport',
        _strategies: [Object],
        _serializers: [Object],
        _deserializers: [Object],
        _infoTransformers: [],
        _framework: [Object],
        _userProperty: 'user',
        Authenticator: [Function: Authenticator],
        Passport: [Function: Authenticator],
        Strategy: [Object],
        strategies: [Object] },
     session: {} },
  flash: [Function: _flash],
  route: { path: '/submit', stack: [ [Object] ], methods: { post: true } } }


username,  undefined
password,  undefined



TypeError: Cannot read property 'length' of undefined
    at sequelize.define.classMethods.createNewUser (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/models/user.js:30:20)
    at app.post.passport.authenticate.successRedirect (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/app.js:101:11)
    at Layer.handle [as handle_request] (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/layer.js:76:5)
    at next (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/route.js:100:13)
    at Route.dispatch (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/route.js:81:3)
    at Layer.handle [as handle_request] (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/layer.js:76:5)
    at /Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/index.js:227:24
    at Function.proto.process_params (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/index.js:305:12)
    at /Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/index.js:221:12
    at Function.match_layer (/Users/lisavogtsf/repos/projects_wdi/firstProjectWDI/node_modules/express/lib/router/index.js:288:3)

