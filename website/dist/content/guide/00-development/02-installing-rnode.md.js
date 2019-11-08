(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{950:function(e,a,n){"use strict";n.r(a);a["default"]={content:'# Installing RNode\nWe deliver RNode software in a variety of installation packages.  Installation packages are available at both [RChain](https://developer.rchain.coop) and [Github](https://github.com/rchain/rchain/releases). We recommend using the latest release.\n\n> **Note**\n>\n> In the command examples below, you must update based on the version number of RNode you want by replacing "x" with the numbers in your installation version.\n\n> **Note**\n>\n> Should there be errors, when you install RNode for the first time, please make shure that you have the newest Java version installed.\n\n## Linux \n<br/>\n<table >\n    <colgroup>\n        <col>\n            <col>\n                <col>\n    </colgroup>\n    <thead>\n        <tr role="row" class="tablesorter-headerRow">\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Platform: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Platform</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Package type: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Package type</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Installation information: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">\n                    <p>Installation information</p>\n                </div>\n            </th>\n        </tr>\n    </thead>\n    <tbody aria-live="polite" aria-relevant="all">\n        <tr role="row">\n            <td class="confluenceTd">\n                <p>Debian 9 Stretch</p>\n                <p>Ubuntu 16.04 LTS</p>\n                <p>Ubuntu 18.04.3 LTS</p>\n            </td>\n            <td class="confluenceTd">Debian Package (.deb)</td>\n            <td class="confluenceTd">\n                <div class="content-wrapper">\n                    <p class="auto-cursor-target"><strong>First time installation:</strong></p>\n                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="466939d5-efde-4033-bacb-42599dd2c8a3">\n                        <div class="codeContent panelContent pdl">\n                            <div>\n                                <div id="highlighter_782465" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                    <div class="toolbar"></div>\n                                    <table  cellpadding="0" cellspacing="0">\n                                        <tbody>\n                                            <tr>\n                                                <td class="code">\n                                                    <div class="container" title="Hint: double-click to select code">\n                                                        <div class="line number1 index0 alt2"><code class="scala plain">apt install ./rnode</code><code class="scala keyword">_</code><code class="scala value">0</code><code class="scala plain">.x.x</code><code class="scala keyword">_</code><code class="scala plain">all.deb</code></div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <p>Re-installation:</p>\n                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="4f4f0f4b-7a8e-4af0-b15c-c16c799fc7a3">\n                        <div class="codeContent panelContent pdl">\n                            <div>\n                                <div id="highlighter_645009" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                    <div class="toolbar"></div>\n                                    <table cellpadding="0" cellspacing="0">\n                                        <tbody>\n                                            <tr>\n                                                <td class="code">\n                                                    <div class="container" title="Hint: double-click to select code">\n                                                        <div class="line number1 index0 alt2"><code class="scala plain">systemctl stop rnode &amp;&amp; apt remove rnode &amp;&amp; rm -rf /</code><code class="scala keyword">var</code><code class="scala plain">/lib/rnode/rspace &amp;&amp; apt install ./rnode</code><code class="scala keyword">_</code><code class="scala value">0</code><code class="scala plain">.x.x</code><code class="scala keyword">_</code><code class="scala plain">all.deb</code></div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr role="row">\n            <td class="confluenceTd">\n                <p>Fedora 27</p>\n                <p>Fedora 28</p>\n                <p>Fedora 29</p>\n                <p>Fedora 30</p>\n            </td>\n            <td class="confluenceTd">RPM Package (.rpm)</td>\n            <td class="confluenceTd">\n                <p><strong>First time installation:</strong>\n                </p>\n                <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="22e126a2-e60a-4d1f-a4a1-ac054f4022a6">\n                    <div class="codeContent panelContent pdl">\n                        <div>\n                            <div id="highlighter_867072" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                <div class="toolbar"></div>\n                                <table  cellpadding="0" cellspacing="0">\n                                    <tbody>\n                                        <tr>\n                                            <td class="code">\n                                                <div class="container" title="Hint: double-click to select code">\n                                                    <div class="line number1 index0 alt2"><code class="scala plain">dnf install ./rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x-</code><code class="scala value">1</code><code class="scala plain">.noarch.rpm</code></div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <p>\n                </p>\n                <p>Re-installation:</p>\n                <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="6e1d756b-79af-4c41-aa88-98c351cdc8d9">\n                    <div class="codeContent panelContent pdl">\n                        <div>\n                            <div id="highlighter_846853" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                <div class="toolbar"></div>\n                                <table  cellpadding="0" cellspacing="0">\n                                    <tbody>\n                                        <tr>\n                                            <td class="code">\n                                                <div class="container" title="Hint: double-click to select code">\n                                                    <div class="line number1 index0 alt2"><code class="scala plain">systemctl stop rnode &amp;&amp; dnf remove rnode &amp;&amp; rm -rf /</code><code class="scala keyword">var</code><code class="scala plain">/lib/rnode/rspace &amp;&amp; dnf install ./rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x-</code><code class="scala value">1</code><code class="scala plain">.noarch.rpm</code></div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div><pre class="auto-cursor-target"><br></pre></td>\n        </tr>\n        <tr role="row">\n            <td colspan="1" class="confluenceTd">Other Linux distributions</td>\n            <td colspan="1" class="confluenceTd">Tarball (.tgz)</td>\n            <td colspan="1" class="confluenceTd">\n                <div class="content-wrapper">\n                    <p><strong>Prerequisites&nbsp;</strong></p>\n                    <ul>\n                        <li>Java - We recommend Open JDK 10,&nbsp;<a href="https://openjdk.java.net/projects/jdk/10/" class="external-link" rel="nofollow">https://openjdk.java.net/projects/jdk/10/</a></li>\n                        <li>Libsodium -&nbsp;<a href="https://download.libsodium.org/doc/" class="external-link" rel="nofollow">https://download.libsodium.org/doc/</a>&nbsp;installed in a standard prefix (/user or /user/local)</li>\n                    </ul>\n                    <p>\n                    </p>\n                    <p><strong>First time installation:</strong></p>\n                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="b47bb8da-61b8-4f4e-ab15-6d6f5d2c3f9c">\n                        <div class="codeContent panelContent pdl">\n                            <div>\n                                <div id="highlighter_922717" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                    <div class="toolbar"></div>\n                                    <table cellpadding="0" cellspacing="0">\n                                        <tbody>\n                                            <tr>\n                                                <td class="code">\n                                                    <div class="container" title="Hint: double-click to select code">\n                                                        <div class="line number1 index0 alt2"><code class="scala plain">tar -xvf rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x.tgz</code></div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n## Mac\n<br/>\n<table resolved="" role="grid">\n    <colgroup>\n        <col>\n            <col>\n                <col>\n    </colgroup>\n    <thead>\n        <tr role="row" class="tablesorter-headerRow">\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Platform: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Platform</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Package type: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Package type</div>\n            </th>\n            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Installation information: No sort applied, activate to apply an ascending sort" style="user-select: none;">\n                <div class="tablesorter-header-inner">Installation information</div>\n            </th>\n        </tr>\n    </thead>\n    <tbody aria-live="polite" aria-relevant="all">\n        <tr role="row">\n            <td class="confluenceTd">Mac</td>\n            <td class="confluenceTd">Tarball (.tgz)</td>\n            <td class="confluenceTd">\n                <div class="content-wrapper">\n                    <p><strong>Prerequisites</strong></p>\n                    <ul>\n                        <li>Java - We recommend Open JDK 10,&nbsp;<a href="https://openjdk.java.net/projects/jdk/10/" class="external-link" rel="nofollow">https://openjdk.java.net/projects/jdk/10/</a></li>\n                        <li>Libsodium -&nbsp;<a href="https://download.libsodium.org/doc/" class="external-link" rel="nofollow">https://download.libsodium.org/doc/</a>&nbsp;installed in a standard prefix (/user or /user/local)</li>\n                    </ul>\n                    <p class="auto-cursor-target"><strong>First time installation:</strong></p>\n                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="3f1198a3-cfb4-4891-8936-770ead296049">\n                        <div class="codeContent panelContent pdl">\n                            <div>\n                                <div id="highlighter_841322" class="syntaxhighlighter sh-confluence nogutter  scala">\n                                    <div class="toolbar"></div>\n                                    <table cellpadding="0" cellspacing="0">\n                                        <tbody>\n                                            <tr>\n                                                <td class="code">\n                                                    <div class="container" title="Hint: double-click to select code">\n                                                        <div class="line number1 index0 alt2"><code class="scala plain">tar -xvf rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x.tgz</code></div>\n                                                        <div class="line number2 index1 alt1"><code class="scala plain">cd rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x</code></div>\n                                                        <div class="line number3 index2 alt2"><code class="scala plain">./macos</code><code class="scala keyword">_</code><code class="scala plain">install.sh</code></div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <p class="auto-cursor-target"><strong>Note:&nbsp;</strong>The macos_install.sh&nbsp;script installs the Homebrew package manager on your machine and then installs libsodium.\n                        <br>If you already have Homebrew installed on your machine, you can refer to the script for how to install libsodium directly.</p>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n## Windows\nPlease install the Docker version for Windows.\n\n## Docker\nAlthough it is simple to install RNode in Docker, it is important to have an understanding for working with Docker to successfully run and interface with RNode.  \n\n* If you are brand new to working with Docker, read the [Docker get started documentation](https://docs.docker.com/get-started/).\n* If you a familiar with Docker, you may find it helpful to review or have ready access to the cheat sheets published at the end of each section of the [Docker get started documentation](https://docs.docker.com/get-started/).\n\n```bash\ndocker pull rchain/rnode\n```\n\n## ARM\nARM\nYou can run RNode on Raspberry pi. An example of this, including installation and deployment instructions, is available at [https://github.com/kayvank/arm-rnode](https://github.com/kayvank/arm-rnode).\n',data:{title:"Installing RNode",description:"Everything you need to know to get up and running with Atlaskit"},isEmpty:false,excerpt:""}}}]);