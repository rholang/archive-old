---
id: installing-rnode
title: Installing RNode
permalink: docs/installing-rnode.html
prev: getting-started.html
next: create-a-new-react-app.html
---

We deliver RNode software in a variety of installation packages.  Installation packages are available at both [RChain](https://developer.rchain.coop) and [Github](https://github.com/rchain/rchain/releases). We recommend using the latest release.

> Note
>
> In the command examples below, you must update based on the version number of RNode you want by replacing "x" with the numbers in your installation version.

> Note
>
> Should there be errors, when you install RNode for the first time, please make shure that you have the newest Java version installed.

##Linux
<br/>
<table >
    <colgroup>
        <col>
            <col>
                <col>
    </colgroup>
    <thead>
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Platform: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Platform</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Package type: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Package type</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Installation information: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">
                    <p>Installation information</p>
                </div>
            </th>
        </tr>
    </thead>
    <tbody aria-live="polite" aria-relevant="all">
        <tr role="row">
            <td class="confluenceTd">
                <p>Debian 9 Stretch</p>
                <p>Ubuntu 16.04 LTS</p>
                <p>Ubuntu 18.04.3 LTS</p>
            </td>
            <td class="confluenceTd">Debian Package (.deb)</td>
            <td class="confluenceTd">
                <div class="content-wrapper">
                    <p class="auto-cursor-target">First time installation:</p>
                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="466939d5-efde-4033-bacb-42599dd2c8a3">
                        <div class="codeContent panelContent pdl">
                            <div>
                                <div id="highlighter_782465" class="syntaxhighlighter sh-confluence nogutter  scala">
                                    <div class="toolbar"></div>
                                    <table  cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td class="code">
                                                    <div class="container" title="Hint: double-click to select code">
                                                        <div class="line number1 index0 alt2"><code class="scala plain">apt install ./rnode</code><code class="scala keyword">_</code><code class="scala value">0</code><code class="scala plain">.x.x</code><code class="scala keyword">_</code><code class="scala plain">all.deb</code></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Re-installation:</p>
                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="4f4f0f4b-7a8e-4af0-b15c-c16c799fc7a3">
                        <div class="codeContent panelContent pdl">
                            <div>
                                <div id="highlighter_645009" class="syntaxhighlighter sh-confluence nogutter  scala">
                                    <div class="toolbar"></div>
                                    <table cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td class="code">
                                                    <div class="container" title="Hint: double-click to select code">
                                                        <div class="line number1 index0 alt2"><code class="scala plain">systemctl stop rnode &amp;&amp; apt remove rnode &amp;&amp; rm -rf /</code><code class="scala keyword">var</code><code class="scala plain">/lib/rnode/rspace &amp;&amp; apt install ./rnode</code><code class="scala keyword">_</code><code class="scala value">0</code><code class="scala plain">.x.x</code><code class="scala keyword">_</code><code class="scala plain">all.deb</code></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">
                <p>Fedora 27</p>
                <p>Fedora 28</p>
                <p>Fedora 29</p>
                <p>Fedora 30</p>
            </td>
            <td class="confluenceTd">RPM Package (.rpm)</td>
            <td class="confluenceTd">
                <p>First time installation:
                </p>
                <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="22e126a2-e60a-4d1f-a4a1-ac054f4022a6">
                    <div class="codeContent panelContent pdl">
                        <div>
                            <div id="highlighter_867072" class="syntaxhighlighter sh-confluence nogutter  scala">
                                <div class="toolbar"></div>
                                <table  cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td class="code">
                                                <div class="container" title="Hint: double-click to select code">
                                                    <div class="line number1 index0 alt2"><code class="scala plain">dnf install ./rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x-</code><code class="scala value">1</code><code class="scala plain">.noarch.rpm</code></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                </p>
                <p>Re-installation:</p>
                <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="6e1d756b-79af-4c41-aa88-98c351cdc8d9">
                    <div class="codeContent panelContent pdl">
                        <div>
                            <div id="highlighter_846853" class="syntaxhighlighter sh-confluence nogutter  scala">
                                <div class="toolbar"></div>
                                <table  cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td class="code">
                                                <div class="container" title="Hint: double-click to select code">
                                                    <div class="line number1 index0 alt2"><code class="scala plain">systemctl stop rnode &amp;&amp; dnf remove rnode &amp;&amp; rm -rf /</code><code class="scala keyword">var</code><code class="scala plain">/lib/rnode/rspace &amp;&amp; dnf install ./rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x-</code><code class="scala value">1</code><code class="scala plain">.noarch.rpm</code></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><pre class="auto-cursor-target"><br></pre></td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">Other Linux distributions</td>
            <td colspan="1" class="confluenceTd">Tarball (.tgz)</td>
            <td colspan="1" class="confluenceTd">
                <div class="content-wrapper">
                    <p><strong>Prerequisites&nbsp;</strong></p>
                    <ul>
                        <li>Java - We recommend Open JDK 10,&nbsp;<a href="https://openjdk.java.net/projects/jdk/10/" class="external-link" rel="nofollow">https://openjdk.java.net/projects/jdk/10/</a></li>
                        <li>Libsodium -&nbsp;<a href="https://download.libsodium.org/doc/" class="external-link" rel="nofollow">https://download.libsodium.org/doc/</a>&nbsp;installed in a standard prefix (/user or /user/local)</li>
                    </ul>
                    <p>
                    </p>
                    <p>First time installation:</p>
                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="b47bb8da-61b8-4f4e-ab15-6d6f5d2c3f9c">
                        <div class="codeContent panelContent pdl">
                            <div>
                                <div id="highlighter_922717" class="syntaxhighlighter sh-confluence nogutter  scala">
                                    <div class="toolbar"></div>
                                    <table cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td class="code">
                                                    <div class="container" title="Hint: double-click to select code">
                                                        <div class="line number1 index0 alt2"><code class="scala plain">tar -xvf rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x.tgz</code></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>

##Mac
<br/>
<table resolved="" role="grid">
    <colgroup>
        <col>
            <col>
                <col>
    </colgroup>
    <thead>
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Platform: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Platform</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Package type: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Package type</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Installation information: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Installation information</div>
            </th>
        </tr>
    </thead>
    <tbody aria-live="polite" aria-relevant="all">
        <tr role="row">
            <td class="confluenceTd">Mac</td>
            <td class="confluenceTd">Tarball (.tgz)</td>
            <td class="confluenceTd">
                <div class="content-wrapper">
                    <p>Prerequisites&nbsp;</p>
                    <ul>
                        <li>Java - We recommend Open JDK 10,&nbsp;<a href="https://openjdk.java.net/projects/jdk/10/" class="external-link" rel="nofollow">https://openjdk.java.net/projects/jdk/10/</a></li>
                        <li>Libsodium -&nbsp;<a href="https://download.libsodium.org/doc/" class="external-link" rel="nofollow">https://download.libsodium.org/doc/</a>&nbsp;installed in a standard prefix (/user or /user/local)</li>
                    </ul>
                    <p class="auto-cursor-target">First time installation:</p>
                    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true" data-macro-name="code" data-macro-id="3f1198a3-cfb4-4891-8936-770ead296049">
                        <div class="codeContent panelContent pdl">
                            <div>
                                <div id="highlighter_841322" class="syntaxhighlighter sh-confluence nogutter  scala">
                                    <div class="toolbar"></div>
                                    <table cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td class="code">
                                                    <div class="container" title="Hint: double-click to select code">
                                                        <div class="line number1 index0 alt2"><code class="scala plain">tar -xvf rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x.tgz</code></div>
                                                        <div class="line number2 index1 alt1"><code class="scala plain">cd rnode-</code><code class="scala value">0</code><code class="scala plain">.x.x</code></div>
                                                        <div class="line number3 index2 alt2"><code class="scala plain">./macos</code><code class="scala keyword">_</code><code class="scala plain">install.sh</code></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="auto-cursor-target"><strong>Note:&nbsp;</strong>The macos_install.sh&nbsp;script installs the Homebrew package manager on your machine and then installs libsodium.
                        <br>If you already have Homebrew installed on your machine, you can refer to the script for how to install libsodium directly.</p>
                </div>
            </td>
        </tr>
    </tbody>
</table>

##Windows
<br/>

Please install the Docker version for Windows.

##Docker
Although it is simple to install RNode in Docker, it is important to have an understanding for working with Docker to successfully run and interface with RNode.  

* If you are brand new to working with Docker, read the [Docker get started documentation](https://docs.docker.com/get-started/).
* If you a familiar with Docker, you may find it helpful to review or have ready access to the cheat sheets published at the end of each section of the [Docker get started documentation](https://docs.docker.com/get-started/).

```bash
docker pull rchain/rnode
```

##ARM
ARM
You can run RNode on Raspberry pi. An example of this, including installation and deployment instructions, is available at [https://github.com/kayvank/arm-rnode](https://github.com/kayvank/arm-rnode).