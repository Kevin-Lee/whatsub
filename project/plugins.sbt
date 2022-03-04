logLevel := sbt.Level.Warn

addSbtPlugin("com.github.sbt" % "sbt-native-packager" % "1.9.9")
addSbtPlugin("org.scalameta"  % "sbt-native-image"    % "0.3.0")
addSbtPlugin("com.eed3si9n"   % "sbt-buildinfo"       % "0.11.0")

addSbtPlugin("io.kevinlee"   % "sbt-docusaur" % "0.8.1")

val sbtDevOopsVersion = "2.15.0"
addSbtPlugin("io.kevinlee" % "sbt-devoops-scala"     % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-sbt-extra" % sbtDevOopsVersion)
addSbtPlugin("io.kevinlee" % "sbt-devoops-github"    % sbtDevOopsVersion)
