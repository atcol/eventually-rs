(function() {var implementors = {};
implementors["eventually_memory"] = [{"text":"impl&lt;SourceId, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_memory/struct.Store.html\" title=\"struct eventually_memory::Store\">Store</a>&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["eventually_memory::Store"]}];
implementors["eventually_util"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/aggregate/referential/struct.AsAggregate.html\" title=\"struct eventually_util::aggregate::referential::AsAggregate\">AsAggregate</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::aggregate::referential::AsAggregate"]},{"text":"impl&lt;Store, Handler&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/command/dispatcher/struct.DirectDispatcher.html\" title=\"struct eventually_util::command::dispatcher::DirectDispatcher\">DirectDispatcher</a>&lt;Store, Handler&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Handler: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::command::dispatcher::DirectDispatcher"]},{"text":"impl&lt;A, C, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"eventually_util/command/dispatcher/enum.Error.html\" title=\"enum eventually_util::command::dispatcher::Error\">Error</a>&lt;A, C, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::command::dispatcher::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/command/static/struct.AsHandler.html\" title=\"struct eventually_util::command::static::AsHandler\">AsHandler</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::command::static::AsHandler"]},{"text":"impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/optional/struct.AsHandler.html\" title=\"struct eventually_util::optional::AsHandler\">AsHandler</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::optional::AsHandler"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::optional::AsAggregate"]},{"text":"impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.AsHandler.html\" title=\"struct eventually_util::versioned::AsHandler\">AsHandler</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::versioned::AsHandler"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.AsAggregate.html\" title=\"struct eventually_util::versioned::AsAggregate\">AsAggregate</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::versioned::AsAggregate"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.Versioned.html\" title=\"struct eventually_util::versioned::Versioned\">Versioned</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::versioned::Versioned"]}];
implementors["point"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"point/struct.State.html\" title=\"struct point::State\">State</a>","synthetic":true,"types":["point::State"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"point/struct.Root.html\" title=\"struct point::Root\">Root</a>","synthetic":true,"types":["point::Root"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"point/struct.Handler.html\" title=\"struct point::Handler\">Handler</a>","synthetic":true,"types":["point::Handler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"point/enum.Command.html\" title=\"enum point::Command\">Command</a>","synthetic":true,"types":["point::Command"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"point/enum.Event.html\" title=\"enum point::Event\">Event</a>","synthetic":true,"types":["point::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"point/enum.CommandError.html\" title=\"enum point::CommandError\">CommandError</a>","synthetic":true,"types":["point::CommandError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"point/enum.EventError.html\" title=\"enum point::EventError\">EventError</a>","synthetic":true,"types":["point::EventError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()