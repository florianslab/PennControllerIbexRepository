# with AJAX withCredentials=false (cookies NOT sent)
Header always set Access-Control-Allow-Origin "*"                  
Header always set Access-Control-Allow-Methods "GET"
Header always set Access-Control-Allow-Headers "X-Accept-Charset,X-Accept,Content-Type"
RewriteEngine On                  
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L,E=HTTP_ORIGIN:%{HTTP:ORIGIN}]]