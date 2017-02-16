import * as assert from "assert";
import { Grid } from "../../src";
import { mockDOMSource, VNode } from "@cycle/dom";
import xsAdapter from "@cycle/xstream-adapter";
import xs from "xstream";

describe("Grid", function () {
  describe("render", function () {
    it("should return a basic grid when called without any arguments", function () {
      let grid = Grid.render();
      assert.equal(grid.data.props.className, "ui grid");
      assert.equal(grid.children.length, 0);
    });
    it("should support argument syntax", function () {
      let grid = Grid.render({ divided: true }, ["Content"]);
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui divided grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render(["Content"]);
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render({ divided: true });
      assert.equal(grid.children.length, 0);
      assert.equal(grid.data.props.className, "ui divided grid");
    });
    it("should support verbose argument object syntax", function () {
      let grid = Grid.render({
        style: { divided: true },
        content: {
          main: ["Content"]
        }
      });
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui divided grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render({
        content: {
          main: ["Content"]
        }
      });
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render({
        style: { divided: true }
      });
      assert.equal(grid.children.length, 0);
      assert.equal(grid.data.props.className, "ui divided grid");
    });
    it("should support shorthand argument object syntax", function () {
      let grid = Grid.render({
        style: { divided: true },
        content: ["Content"]
      });
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui divided grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render({
        content: ["Content"]
      });
      assert.equal(grid.children.length, 1);
      assert.equal(grid.data.props.className, "ui grid");
      assert.equal((grid.children[0] as VNode).text, "Content");
      grid = Grid.render({
        style: { divided: true }
      });
      assert.equal(grid.children.length, 0);
      assert.equal(grid.data.props.className, "ui divided grid");
    });
    it("should support the divided variation", function () {
      let grid = Grid.render({ divided: true });
      assert.equal(grid.data.props.className, "ui divided grid");
    });
    it("should support the equal width variation", function () {
      let grid = Grid.render({ equalWidth: true });
      assert.equal(grid.data.props.className, "ui one column grid");
    });
    it("should support the container variation", function () {
      let grid = Grid.render({ container: true });
      assert.equal(grid.data.props.className, "ui container grid");
    });
    it("should support the celled variation", function () {
      let grid = Grid.render({ celled: true });
      assert.equal(grid.data.props.className, "ui celled grid");
    });
    it("should support the internally celled variation", function () {
      let grid = Grid.render({ intCelled: true });
      assert.equal(grid.data.props.className, "ui internally celled grid");
    });
    it("should support the padded variation", function () {
      let grid = Grid.render({ padded: true });
      assert.equal(grid.data.props.className, "ui padded grid");
    });
    it("should support the relaxed variation", function () {
      let grid = Grid.render({ relaxed: true });
      assert.equal(grid.data.props.className, "ui relaxed grid");
    });
    it("should support the centered variation", function () {
      let grid = Grid.render({ centered: true });
      assert.equal(grid.data.props.className, "ui centered grid");
    });
    it("should support the vertical alignment enum", function () {
      let grid = Grid.render({ alignment: "top" });
      assert.equal(grid.data.props.className, "ui top aligned grid");
    });
    it("should support the text alignment enum", function () {
      let grid = Grid.render({ textAlignment: "left" });
      assert.equal(grid.data.props.className, "ui left aligned grid");
    });
  });
  describe("run", function () {
    let dom = mockDOMSource(xsAdapter, {
      ".___grid": {
        ".grid": {
          "click": xs.of("Clicked")
        }
      }
    });
    it("should return a grid stream", function (done) {
      let grid = Grid.run({ DOM: dom });
      grid.DOM.addListener({
        next: (x) => {
          assert.equal("ui grid", x.data.props.className);
          done();
        }
      });
    });
    it("should return an isolated component", function (done) {
      let grid = Grid.run({ DOM: dom }, "grid");
      grid.DOM.addListener({
        next: (x) => {
          assert.equal("div.___grid", x.sel);
          done();
        }
      });
    });
    it("should expose events through the events function", function (done) {
      let grid = Grid.run({ DOM: dom }, "grid");
      grid.events("click").addListener({
        next: (x) => {
          assert.equal("Clicked", x);
          done();
        }
      });
    });
  });
});
