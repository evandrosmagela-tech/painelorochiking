// ==UserScript==
// @name         OROCHIKING — Painel de Scripts
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Painel unificado preto/dourado com scripts de automação para Tribal Wars
// @author       OROCHIKING
// @match        https://*.tribalwars.com.br/game.php*
// @match        https://*.tribalwars.com.pt/game.php*
// @match        https://*.guerretribale.fr/game.php*
// @match        https://*.tribalwars.co.uk/game.php*
// @match        https://*.tribalwars.net/game.php*
// @match        https://*.divokekmeny.cz/game.php*
// @match        https://*.triburile.ro/game.php*
// @match        https://*.guerrastribales.es/game.php*
// @match        https://*.fyletikesmaxes.gr/game.php*
// @match        https://*.plemiona.pl/game.php*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      raw.githubusercontent.com
// @connect      github.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log('[OROCHIKING] Carregando painel...');

    var xmlHttpFunc = window.GM && window.GM.xmlHttpRequest ? window.GM.xmlHttpRequest : GM_xmlhttpRequest;

    xmlHttpFunc({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/evandrosmagela-tech/painelorochiking/refs/heads/main/painelorochiking.js',
        onload: function(response) {
            if (response.status === 200) {
                console.log('[OROCHIKING] Script carregado (' + response.responseText.length + ' bytes)');
                
                // Remover whitelist (comentar a verificação)
                var script = response.responseText
                    .replace(/if \(WHITELIST_NICKS\.indexOf\(seuNick\) === -1\) \{ return; \}/g, '// Whitelist desativada');
                
                try {
                    eval(script);
                    console.log('[OROCHIKING] ✅ Painel ativado com sucesso!');
                } catch (e) {
                    console.error('[OROCHIKING] Erro ao executar:', e);
                }
            } else {
                console.error('[OROCHIKING] Erro ao carregar (status ' + response.status + ')');
            }
        },
        onerror: function(error) {
            console.error('[OROCHIKING] Erro na requisição:', error);
        },
        timeout: 30000
    });
})();
